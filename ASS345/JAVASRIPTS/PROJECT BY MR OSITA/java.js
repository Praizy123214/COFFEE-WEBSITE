const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correct: 2,
  },
  {
    question: "What is 5 + 3?",
    choices: ["5", "6", "7", "8"],
    correct: 3,
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 30;
let timerInterval;
let quizOver = false;

// DOM elements
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const timerEl = document.getElementById("time");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-button");

// Start the quiz
function startQuiz() {
  displayQuestion();
  startTimer();
}

// Display the current question and choices
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const choiceEl = document.createElement("button");
    choiceEl.classList.add("choice");
    choiceEl.textContent = choice;
    choiceEl.onclick = () => checkAnswer(index);
    choicesEl.appendChild(choiceEl);
  });
}

// Check the user's answer
function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correct) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      timerEl.textContent = timeRemaining;
    } else {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// End the quiz
function endQuiz() {
  quizOver = true;
  clearInterval(timerInterval);
  resultContainer.style.display = "block";

  if (score === questions.length) {
    resultMessage.textContent = "Congratulations! You won!";
  } else {
    resultMessage.textContent = "You failed! Try again.";
  }
}

// Restart the quiz
restartButton.addEventListener("click", () => {
  quizOver = false;
  score = 0;
  currentQuestionIndex = 0;
  timeRemaining = 30;
  resultContainer.style.display = "none";
  startQuiz();
});

// Initialize the quiz
startQuiz();
