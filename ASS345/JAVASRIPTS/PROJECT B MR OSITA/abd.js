let secretNumber;
let attemptsLeft = 10;
let gameEnded = false;

function startGame() {
  secretNumber = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 100
  attemptsLeft = 10;
  gameEnded = false;
  document.getElementById("guess-input").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("attempts").querySelector("span").textContent =
    attemptsLeft;
  document.getElementById("reset-button").style.display = "none";
  document.getElementById("guess-button").disabled = false;
}

function checkGuess() {
  if (gameEnded) return;

  const userGuess = parseInt(document.getElementById("guess-input").value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
    document.getElementById("result").textContent =
      "Please enter a number between 1 and 100.";
    return;
  }

  attemptsLeft--;
  document.getElementById("attempts").querySelector("span").textContent =
    attemptsLeft;

  if (userGuess === secretNumber) {
    document.getElementById("result").textContent =
      "Congratulations! You guessed the correct number!";
    gameEnded = true;
  } else if (userGuess < secretNumber) {
    document.getElementById("result").textContent = "Too low! Try again.";
  } else {
    document.getElementById("result").textContent = "Too high! Try again.";
  }

  if (attemptsLeft === 0 && !gameEnded) {
    document.getElementById(
      "result"
    ).textContent = `Game over! The correct number was ${secretNumber}.`;
    gameEnded = true;
  }

  if (gameEnded) {
    document.getElementById("reset-button").style.display = "inline-block";
    document.getElementById("guess-button").disabled = true;
  }
}

function resetGame() {
  startGame();
}

// Initialize the game when the page loads
startGame();
