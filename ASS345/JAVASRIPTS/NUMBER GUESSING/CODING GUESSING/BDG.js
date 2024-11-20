// Array of 20 True/False questions about coding elements
const questions = [
  { question: "HTML is a programming language.", answer: false },
  {
    question: "JavaScript can be used to manipulate HTML elements.",
    answer: true,
  },
  { question: "CSS stands for Computer Style Sheets.", answer: false },
  { question: "Python is a compiled language.", answer: false },
  {
    question: "The 'if' statement is used to check conditions in programming.",
    answer: true,
  },
  {
    question: "In HTML, <head> tag contains metadata about the webpage.",
    answer: true,
  },
  {
    question: "The 'else' clause is always required in an 'if' statement.",
    answer: false,
  },
  {
    question: "A function in JavaScript is used to store values.",
    answer: false,
  },
  {
    question:
      "The 'let' keyword in JavaScript declares a block-scoped variable.",
    answer: true,
  },
  { question: "React is a JavaScript framework.", answer: false },
  {
    question: "An array can store multiple types of data in Python.",
    answer: true,
  },
  { question: "SQL is used for styling web pages.", answer: false },
  {
    question: "A variable can be declared without initializing it.",
    answer: true,
  },
  {
    question: "JavaScript uses curly braces {} to define functions.",
    answer: true,
  },
  {
    question: "CSS is used for adding interactivity to a webpage.",
    answer: false,
  },
  { question: "A loop can run indefinitely in a program.", answer: true },
  { question: "The 'for' loop can only iterate over arrays.", answer: false },
  { question: "JSON stands for JavaScript Object Notation.", answer: true },
  { question: "HTML5 supports local storage.", answer: true },
  {
    question: "In CSS, 'px' is a relative unit of measurement.",
    answer: false,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 20;

// Display the first question
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const questionNumberElement = document.getElementById("question-number");

  questionElement.textContent = questions[currentQuestionIndex].question;
  questionNumberElement.textContent = currentQuestionIndex + 1;

  document.getElementById("true-btn").disabled = false;
  document.getElementById("false-btn").disabled = false;
}

// Handle true/false button click
function checkAnswer(userAnswer) {
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    score++;
  }

  document.getElementById("score").textContent = score;
  currentQuestionIndex++;

  if (currentQuestionIndex < totalQuestions) {
    displayQuestion();
  } else {
    endGame();
  }
}

// End the game and show the final score
function endGame() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("restart-btn").style.display = "block";
  document.getElementById("restart-btn").addEventListener("click", restartGame);
}

// Restart the game
function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("score").textContent = score;
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  displayQuestion();
}

// Attach event listeners to the True and False buttons
document.getElementById("true-btn").addEventListener("click", function () {
  checkAnswer(true);
});
document.getElementById("false-btn").addEventListener("click", function () {
  checkAnswer(false);
});

// Initialize the game
displayQuestion();
