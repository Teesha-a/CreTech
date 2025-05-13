const questions = [
   {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false }
    ]
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "JQuery", correct: false },
      { text: "CSS", correct: true }
    ]
  },
  {
    question: "Which is not a JavaScript framework?",
    answers: [
      { text: "React", correct: false },
      { text: "Vue", correct: false },
      { text: "Cassandra", correct: true }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Style System", correct: false },
      { text: "Cascading Style Sheets", correct: true }
    ]
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false }
    ]
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Method", correct: false },
      { text: "Digital Order Module", correct: false }
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "<!-- -->", correct: false },
      { text: "#", correct: false }
    ]
  },
  {
    question: "Which method converts JSON into a JavaScript object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.toObject()", correct: false }
    ]
  },
  {
    question: "Which attribute is used to include external CSS?",
    answers: [
      { text: "src", correct: false },
      { text: "style", correct: false },
      { text: "href", correct: true }
    ]
  },
  {
    question: "Which function is used to delay code execution in JS?",
    answers: [
      { text: "setTimeout()", correct: true },
      { text: "delay()", correct: false },
      { text: "sleep()", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");

function showQuestion() {
  resetState();
  const current = questions[currentQuestionIndex];
  questionEl.innerText = current.question;

  current.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("answer-btn");
    btn.addEventListener("click", () => selectAnswer(answer.correct, btn));
    answersEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

function selectAnswer(correct, button) {
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (correct) {
    score++;
    button.style.background = "#c8e6c9"; // green
  } else {
    button.style.background = "#ffcdd2"; // red
  }

  nextBtn.style.display = "block";
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");

  scoreEl.innerText = `${score} / ${questions.length}`;
  feedbackEl.innerText = score === questions.length
    ? "Awesome! Perfect score!"
    : score >= questions.length / 2
    ? "Good job! Keep practicing."
    : "Keep trying! You'll get better.";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  showQuestion();
}

showQuestion();
