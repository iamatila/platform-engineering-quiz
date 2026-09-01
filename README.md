# Platform Engineering Quiz Hub

A self-contained, zero-dependency web UI to test your knowledge after each lesson.

## How to use

Just open `index.html` in any browser — no server, no install, no build step required.

```
Double-click  →  quiz/index.html
```

Or serve it locally if you prefer:

```bash
# Python (any machine with Python installed)
cd quiz
python -m http.server 8080
# Open http://localhost:8080
```

## Topics covered

| # | Topic | Level | Questions |
|---|-------|-------|-----------|
| 1 | Introduction to Platform Engineering | Beginner | 20 |
| 2 | Docker & Containers | Beginner | 20 |
| 3 | Introduction to Backstage | Beginner | 20 |
| 4 | Kubernetes Fundamentals | Beginner | 20 |
| 5 | Infrastructure as Code — Terraform | Beginner | 20 |
| 6 | CI/CD with GitHub Actions | Beginner | 20 |
| 7 | Platform Security | Beginner | 20 |
| 8 | Building Production IDPs | Intermediate | 20 |
| 9 | Observability Stack | Intermediate | 20 |
| 10 | Golden Path Templates | Intermediate | 20 |
| 11 | Platform Adoption & Metrics | Intermediate | 20 |
| 12 | Security & Compliance | Intermediate | 20 |
| 13 | Enterprise Platform Architecture | Expert | 20 |
| 14 | Multi-Cloud & AI-Powered Platforms | Expert | 20 |

**Total: 280 questions**

## How the quiz works

1. Pick a topic from the home screen
2. Answer all 20 multiple-choice questions
3. Each question reveals the correct answer and an explanation immediately after you answer
4. After question 20, the results screen shows:
   - Your score with an animated ring chart
   - **Incorrect answers** tab — every question you got wrong, your answer, the correct answer, and the explanation
   - **Correct answers** tab — all the ones you got right with explanations
5. Your best score per topic is saved in the browser (localStorage) and shown on the home screen

## Files

```
quiz/
├── index.html      — app shell, three screens (home / quiz / results)
├── style.css       — dark theme UI
├── questions.js    — all 140 questions, options, answers, and explanations
├── app.js          — quiz engine (state, rendering, scoring, persistence)
└── README.md       — this file
```

## Adding more questions

Open `questions.js` and add entries to any topic's `questions` array:

```js
{
  q: "Your question text here?",
  opts: [
    "Option A",
    "Option B — correct answer",
    "Option C",
    "Option D"
  ],
  answer: 1,     // 0-indexed — 1 = option B
  explain: "Explanation shown after answering."
}
```

## Adding a new topic

Add a new object to the `TOPICS` array in `questions.js`:

```js
{
  id: "cicd",
  title: "CI/CD with GitHub Actions",
  icon: "⚡",
  level: "Beginner",
  color: "#f97316",
  desc: "Workflows, actions, secrets, and deployment pipelines.",
  questions: [ /* 20 question objects */ ]
}
```

The home screen renders topic cards automatically from the TOPICS array.
