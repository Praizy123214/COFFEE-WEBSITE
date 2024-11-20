const colorNameDisplay = document.getElementById("color-name");
const colorOptionsContainer = document.getElementById("color-options");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const restartButton = document.getElementById("restart");

let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

// Colors and their names
const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Green", hex: "#00FF00" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Purple", hex: "#800080" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Brown", hex: "#A52A2A" },
];

function startGame() {
  score = 0;
  timeLeft = 30;
  updateScore();
  updateTimer();
  loadNewRound();

  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function loadNewRound() {
  // Select a random color for the name and options
  const correctColor = colors[Math.floor(Math.random() * colors.length)];
  const shuffledColors = shuffle(colors);

  // Display the color name in a random text color
  colorNameDisplay.textContent = correctColor.name;
  colorNameDisplay.style.color =
    shuffledColors[Math.floor(Math.random() * shuffledColors.length)].hex;

  // Populate the options
  colorOptionsContainer.innerHTML = "";
  shuffledColors.forEach((color) => {
    const colorOption = document.createElement("div");
    colorOption.classList.add("color-option");
    colorOption.style.backgroundColor = color.hex;
    colorOption.addEventListener("click", () =>
      checkAnswer(color, correctColor)
    );
    colorOptionsContainer.appendChild(colorOption);
  });
}

function checkAnswer(selectedColor, correctColor) {
  if (selectedColor.name === correctColor.name) {
    score++;
    updateScore();
    loadNewRound();
  } else {
    score--;
    updateScore();
  }
}

function updateScore() {
  scoreDisplay.textContent = score;
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame();
  }
}

function endGame() {
  colorOptionsContainer.innerHTML = `<h2>Time's up! Your final score: ${score}</h2>`;
  colorNameDisplay.textContent = "";
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

restartButton.addEventListener("click", startGame);

// Start the game on load
startGame();
