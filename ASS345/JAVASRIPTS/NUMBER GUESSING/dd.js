// script.js
let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const resetGame = document.getElementById("resetGame");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

submitGuess.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    message.style.color = "green";
    submitGuess.disabled = true;
  } else if (userGuess > randomNumber) {
    message.textContent = "📉 Too high! Try again.";
    message.style.color = "red";
  } else if (userGuess < randomNumber) {
    message.textContent = "📈 Too low! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "❌ Invalid input. Please enter a number!";
    message.style.color = "orange";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
});

resetGame.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  message.textContent = "";
  attemptsDisplay.textContent = "Attempts: 0";
  guessInput.value = "";
  submitGuess.disabled = false;
});
