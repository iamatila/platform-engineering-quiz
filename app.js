// ============================================================
// PLATFORM ENGINEERING QUIZ — APP LOGIC
// ============================================================

// ── Constants ─────────────────────────────────────────────────
const QUIZ_DURATION = 20 * 60; // 20 minutes in seconds

// ── State ────────────────────────────────────────────────────
let currentTopic    = null;   // topic object
let questions       = [];     // shuffled questions for this session
let currentIndex    = 0;      // current question index
let selectedOption  = null;   // index of user's selected option
let answered        = false;  // has the user answered the current question?
let results         = [];     // { q, opts, answer, chosen, correct, explain }
let bestScores      = {};     // topicId → best score, persisted in localStorage
let activeFilter    = 'All';  // current level filter

// ── Timer state ───────────────────────────────────────────────
let timerInterval   = null;
let timeRemaining   = QUIZ_DURATION;
let timeUsed        = 0;

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadBestScores();
  renderTopicGrid();
  bindButtons();
  bindFilters();
});

// ── Persistence ──────────────────────────────────────────────
function loadBestScores() {
  try {
    bestScores = JSON.parse(localStorage.getItem('pe_quiz_best') || '{}');
  } catch { bestScores = {}; }
}

function saveBestScore(topicId, score) {
  const prev = bestScores[topicId] ?? -1;
  if (score > prev) {
    bestScores[topicId] = score;
    localStorage.setItem('pe_quiz_best', JSON.stringify(bestScores));
  }
}

// ── Filter ────────────────────────────────────────────────────
function bindFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderTopicGrid();
    });
  });
}

// ── Home Screen ───────────────────────────────────────────────
function renderTopicGrid() {
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = '';

  const filtered = activeFilter === 'All'
    ? TOPICS
    : TOPICS.filter(t => t.level === activeFilter);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-filter-state">No topics found for "<strong>${activeFilter}</strong>".</div>`;
    return;
  }

  filtered.forEach(topic => {
    const best = bestScores[topic.id] ?? null;
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.style.setProperty('--card-color', topic.color);

    card.innerHTML = `
      ${best !== null ? `<div class="best-score-badge">Best: ${best}/20</div>` : ''}
      <div class="topic-icon">${topic.icon}</div>
      <div class="topic-level">${topic.level}</div>
      <h3>${topic.title}</h3>
      <p>${topic.desc}</p>
      <div class="topic-meta">
        <span>20 questions</span>
        <span class="dot">·</span>
        <span>20 min timer</span>
        <span class="dot">·</span>
        <span>Multiple choice</span>
      </div>
      <button class="start-btn">Start Quiz →</button>
    `;

    card.querySelector('.start-btn').addEventListener('click', () => startQuiz(topic));
    grid.appendChild(card);
  });
}

// ── Quiz Start ────────────────────────────────────────────────
function startQuiz(topic) {
  currentTopic  = topic;
  questions     = shuffle([...topic.questions]);
  currentIndex  = 0;
  results       = [];

  document.getElementById('quiz-topic-badge').textContent      = topic.level;
  document.getElementById('quiz-topic-badge').style.color       = topic.color;
  document.getElementById('quiz-topic-badge').style.borderColor = topic.color;
  document.getElementById('quiz-title').textContent             = topic.title;

  showScreen('quiz');
  startTimer();
  renderQuestion();
}

// ── Timer ─────────────────────────────────────────────────────
function startTimer() {
  clearInterval(timerInterval);
  timeRemaining = QUIZ_DURATION;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timeExpired();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timeUsed = QUIZ_DURATION - timeRemaining;
}

function updateTimerDisplay() {
  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  const display = `${mins}:${secs.toString().padStart(2, '0')}`;
  document.getElementById('timer-text').textContent = display;

  // Animate the ring
  const circumference = 113.1;
  const pct = timeRemaining / QUIZ_DURATION;
  const offset = circumference * (1 - pct);
  document.getElementById('timer-ring-fill').style.strokeDashoffset = offset;

  // Colour: green → yellow (under 5min) → red (under 1min)
  const fill = document.getElementById('timer-ring-fill');
  const timerText = document.getElementById('timer-text');
  if (timeRemaining <= 60) {
    fill.style.stroke = '#f85149';
    timerText.classList.add('timer-urgent');
  } else if (timeRemaining <= 300) {
    fill.style.stroke = '#e3b341';
    timerText.classList.remove('timer-urgent');
  } else {
    fill.style.stroke = '#3fb950';
    timerText.classList.remove('timer-urgent');
  }
}

function timeExpired() {
  // Auto-submit any unanswered question then go to results
  // If mid-question without answering, record it as unanswered (wrong)
  if (!answered && currentIndex < questions.length) {
    const q = questions[currentIndex];
    results.push({
      q:       q.q,
      opts:    q.opts,
      answer:  q.answer,
      chosen:  -1,
      correct: false,
      explain: q.explain
    });
  }
  // Fill in any remaining questions as skipped
  for (let i = results.length; i < questions.length; i++) {
    const q = questions[i];
    results.push({
      q:       q.q,
      opts:    q.opts,
      answer:  q.answer,
      chosen:  -1,
      correct: false,
      explain: q.explain
    });
  }
  showResults();
}

function formatTimeTaken(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
}

// ── Question Render ───────────────────────────────────────────
function renderQuestion() {
  const q = questions[currentIndex];
  selectedOption = null;
  answered       = false;

  // progress
  const pct = (currentIndex / questions.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent =
    `${currentIndex + 1} / ${questions.length}`;

  // question card re-animation
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  requestAnimationFrame(() => { card.style.animation = ''; });

  document.getElementById('q-number').textContent = `Question ${currentIndex + 1}`;
  document.getElementById('q-text').textContent   = q.q;

  // build options
  const list = document.getElementById('options-list');
  list.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.index = i;
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectOption(i));
    list.appendChild(btn);
  });

  // remove any lingering explanation box
  const oldExplain = document.getElementById('explanation-box');
  if (oldExplain) oldExplain.remove();

  // next button
  const nextBtn = document.getElementById('btn-next');
  nextBtn.disabled    = true;
  nextBtn.textContent =
    currentIndex === questions.length - 1 ? 'See Results →' : 'Next →';
}

// ── Option Selection ──────────────────────────────────────────
function selectOption(idx) {
  if (answered) return;
  answered = true;
  selectedOption = idx;

  const q    = questions[currentIndex];
  const list = document.getElementById('options-list');
  const btns = list.querySelectorAll('.option-btn');

  btns.forEach(b => { b.disabled = true; });

  const isCorrect = (idx === q.answer);
  btns[idx].classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) btns[q.answer].classList.add('correct');

  // explanation
  const explain = document.createElement('div');
  explain.id = 'explanation-box';
  explain.className = 'explanation-box' + (isCorrect ? '' : ' wrong');
  explain.innerHTML = `<strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong> ${q.explain}`;

  const nextBtn = document.getElementById('btn-next');
  nextBtn.parentNode.insertBefore(explain, nextBtn);
  nextBtn.disabled = false;

  results.push({
    q:       q.q,
    opts:    q.opts,
    answer:  q.answer,
    chosen:  idx,
    correct: isCorrect,
    explain: q.explain
  });
}

// ── Next / Results ────────────────────────────────────────────
function nextQuestion() {
  if (!answered) return;

  currentIndex++;
  if (currentIndex >= questions.length) {
    stopTimer();
    showResults();
  } else {
    renderQuestion();
  }
}

// ── Results Screen ────────────────────────────────────────────
function showResults() {
  stopTimer();
  const score = results.filter(r => r.correct).length;
  saveBestScore(currentTopic.id, score);
  renderTopicGrid();

  // score ring
  const total = questions.length;
  const pct   = score / total;
  const circumference = 326.7;
  const offset = circumference * (1 - pct);
  const ring = document.getElementById('ring-fill');
  const colour = pct >= 0.8 ? '#3fb950' : pct >= 0.5 ? '#e3b341' : '#f85149';
  ring.style.stroke = colour;
  setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);

  document.getElementById('score-num').textContent = score;
  document.getElementById('score-den').textContent = `/${total}`;

  // label
  let label = '';
  if      (pct === 1)   label = '🏆 Perfect score!';
  else if (pct >= 0.8)  label = '🎉 Great work — you know this topic well!';
  else if (pct >= 0.6)  label = '👍 Solid — review the ones you missed.';
  else if (pct >= 0.4)  label = '📖 Keep studying — review the lesson slides.';
  else                  label = '🔁 Revisit this lesson before retrying.';
  document.getElementById('score-label').textContent = label;

  // time taken
  const taken = formatTimeTaken(timeUsed);
  const timeLbl = document.getElementById('time-taken-label');
  timeLbl.textContent = timeUsed >= QUIZ_DURATION
    ? '⏰ Time ran out!'
    : `⏱ Completed in ${taken}`;

  // counts
  const wrong = results.filter(r => !r.correct);
  const right = results.filter(r =>  r.correct);
  document.getElementById('wrong-count').textContent = wrong.length;
  document.getElementById('right-count').textContent = right.length;

  showTab('wrong');
  showScreen('results');
}

// ── Results Tab ───────────────────────────────────────────────
function showTab(tab) {
  document.getElementById('tab-wrong').classList.toggle('active', tab === 'wrong');
  document.getElementById('tab-right').classList.toggle('active', tab === 'right');

  const list = document.getElementById('results-list');
  list.innerHTML = '';

  const filtered = tab === 'wrong'
    ? results.filter(r => !r.correct)
    : results.filter(r =>  r.correct);

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="big-emoji">${tab === 'wrong' ? '🎉' : '😅'}</div>
        <p>${tab === 'wrong' ? 'No incorrect answers — you got them all right!' : 'You got all of these wrong — keep studying!'}</p>
      </div>`;
    return;
  }

  const letters = ['A', 'B', 'C', 'D'];

  filtered.forEach(r => {
    const item = document.createElement('div');
    item.className = `result-item ${r.correct ? 'correct' : 'wrong'}`;

    const qIdx = results.indexOf(r) + 1;
    const yourAnswerText    = r.chosen === -1 ? '(not answered — time ran out)' : r.opts[r.chosen];
    const correctAnswerText = r.opts[r.answer];
    const chosenLetter      = r.chosen === -1 ? '—' : letters[r.chosen];

    item.innerHTML = `
      <div class="result-q-num">Question ${qIdx}</div>
      <div class="result-q-text">${r.q}</div>
      <div class="result-answers">
        <div class="result-answer-row your-answer ${r.correct ? 'right' : 'wrong'}">
          <span class="result-answer-icon">${r.correct ? '✅' : '❌'}</span>
          <span><span class="result-answer-label">Your answer:</span> ${chosenLetter}${r.chosen !== -1 ? '.' : ''} ${yourAnswerText}</span>
        </div>
        ${!r.correct ? `
        <div class="result-answer-row correct-answer">
          <span class="result-answer-icon">✅</span>
          <span><span class="result-answer-label">Correct answer:</span> ${letters[r.answer]}. ${correctAnswerText}</span>
        </div>` : ''}
      </div>
      <div class="result-explanation">💡 ${r.explain}</div>
    `;

    list.appendChild(item);
  });
}

// ── Button Bindings ───────────────────────────────────────────
function bindButtons() {
  document.getElementById('btn-next').addEventListener('click', nextQuestion);

  document.getElementById('btn-back').addEventListener('click', () => {
    if (confirm('Leave this quiz? Your progress will be lost.')) {
      stopTimer();
      showScreen('home');
    }
  });

  document.getElementById('btn-results-back').addEventListener('click', () => {
    showScreen('home');
  });

  document.getElementById('btn-retry').addEventListener('click', () => {
    startQuiz(currentTopic);
  });

  document.getElementById('btn-home').addEventListener('click', () => {
    showScreen('home');
  });
}

// ── Screen Manager ────────────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Utilities ─────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// expose for inline onclick
window.showTab = showTab;
