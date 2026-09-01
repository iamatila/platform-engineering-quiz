// ============================================================
// PLATFORM ENGINEERING QUIZ — APP LOGIC
// ============================================================

// ── State ────────────────────────────────────────────────────
let currentTopic   = null;   // topic object
let questions      = [];     // shuffled questions for this session
let currentIndex   = 0;      // current question index
let selectedOption = null;   // index of user's selected option
let answered       = false;  // has the user answered the current question?
let results        = [];     // { q, opts, answer, chosen, correct, explain }
let bestScores     = {};     // topicId → best score, persisted in localStorage

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadBestScores();
  renderTopicGrid();
  bindButtons();
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

// ── Home Screen ───────────────────────────────────────────────
function renderTopicGrid() {
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = '';

  TOPICS.forEach(topic => {
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
        <span>Multiple choice</span>
        <span class="dot">·</span>
        <span>With explanations</span>
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

  document.getElementById('quiz-topic-badge').textContent = topic.level;
  document.getElementById('quiz-topic-badge').style.color       = topic.color;
  document.getElementById('quiz-topic-badge').style.borderColor = topic.color;
  document.getElementById('quiz-title').textContent = topic.title;

  showScreen('quiz');
  renderQuestion();
}

// ── Question Render ───────────────────────────────────────────
function renderQuestion() {
  const q = questions[currentIndex];
  selectedOption = null;
  answered       = false;

  // progress
  const pct = ((currentIndex) / questions.length) * 100;
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
  nextBtn.disabled  = true;
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

  // disable all
  btns.forEach(b => { b.disabled = true; });

  const isCorrect = (idx === q.answer);

  // style the selected button
  btns[idx].classList.add(isCorrect ? 'correct' : 'wrong');

  // always reveal the correct answer
  if (!isCorrect) {
    btns[q.answer].classList.add('correct');
  }

  // explanation
  const explain = document.createElement('div');
  explain.id = 'explanation-box';
  explain.className = 'explanation-box' + (isCorrect ? '' : ' wrong');
  explain.innerHTML = `<strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong> ${q.explain}`;

  // insert before next button
  const nextBtn = document.getElementById('btn-next');
  nextBtn.parentNode.insertBefore(explain, nextBtn);

  // enable next
  nextBtn.disabled = false;

  // record result
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
    showResults();
  } else {
    renderQuestion();
  }
}

// ── Results Screen ────────────────────────────────────────────
function showResults() {
  const score = results.filter(r => r.correct).length;
  saveBestScore(currentTopic.id, score);
  renderTopicGrid(); // refresh best scores on home

  // score ring animation
  const total = questions.length;
  const pct   = score / total;
  const circumference = 326.7;
  const offset = circumference * (1 - pct);
  const ring = document.getElementById('ring-fill');
  // colour by score
  const colour = pct >= 0.8 ? '#3fb950' : pct >= 0.5 ? '#e3b341' : '#f85149';
  ring.style.stroke = colour;
  setTimeout(() => {
    ring.style.strokeDashoffset = offset;
  }, 100);

  document.getElementById('score-num').textContent = score;
  document.getElementById('score-den').textContent = `/${total}`;

  // label
  let label = '';
  if      (pct === 1)    label = '🏆 Perfect score!';
  else if (pct >= 0.8)   label = '🎉 Great work — you know this topic well!';
  else if (pct >= 0.6)   label = '👍 Solid — review the ones you missed.';
  else if (pct >= 0.4)   label = '📖 Keep studying — review the lesson slides.';
  else                   label = '🔁 Revisit this lesson before retrying.';
  document.getElementById('score-label').textContent = label;

  // counts
  const wrong = results.filter(r => !r.correct);
  const right = results.filter(r =>  r.correct);
  document.getElementById('wrong-count').textContent = wrong.length;
  document.getElementById('right-count').textContent = right.length;

  // default to wrong tab (most useful)
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

  filtered.forEach((r, i) => {
    const item = document.createElement('div');
    item.className = `result-item ${r.correct ? 'correct' : 'wrong'}`;

    const qIdx = results.indexOf(r) + 1;
    const yourAnswerText   = r.opts[r.chosen];
    const correctAnswerText = r.opts[r.answer];

    item.innerHTML = `
      <div class="result-q-num">Question ${qIdx}</div>
      <div class="result-q-text">${r.q}</div>
      <div class="result-answers">
        <div class="result-answer-row your-answer ${r.correct ? 'right' : 'wrong'}">
          <span class="result-answer-icon">${r.correct ? '✅' : '❌'}</span>
          <span><span class="result-answer-label">Your answer:</span> ${letters[r.chosen]}. ${yourAnswerText}</span>
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
