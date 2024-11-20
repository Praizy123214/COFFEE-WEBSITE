document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("puzzle-grid");
  const shuffleButton = document.getElementById("shuffle-button");
  const startButton = document.getElementById("start-button");
  const difficultySelect = document.getElementById("difficulty");
  const winMessage = document.getElementById("win-message");
  const timeTaken = document.getElementById("time-taken");
  const timerDisplay = document.getElementById("timer");
  const timeUpButton = document.getElementById("time-up-button"); // Button for game over

  let gridSize = 4; // Default grid size for Medium
  let tiles = [];
  let timerInterval;
  let secondsRemaining;
  let totalSeconds;

  // Time limits for each difficulty
  const timeLimits = {
    easy: 120, // 2 minutes
    medium: 180, // 3 minutes
    hard: 300, // 5 minutes
  };

  // Initialize the puzzle
  function initPuzzle() {
    gridSize =
      difficultySelect.value === "easy"
        ? 3
        : difficultySelect.value === "hard"
        ? 5
        : 4;
    totalSeconds = timeLimits[difficultySelect.value];
    secondsRemaining = totalSeconds;

    tiles = [...Array(gridSize * gridSize - 1).keys()].map((n) => n + 1);
    tiles.push(null); // Empty space
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    renderGrid();
    resetTimer();
    winMessage.classList.add("hidden");
    shuffleButton.classList.remove("hidden");
    timeUpButton.classList.add("hidden"); // Hide the "Time's Up" button initially
  }

  // Shuffle the tiles
  function shuffleTiles() {
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    renderGrid();
    startTimer();
  }

  function initPuzzle() {
    // Set grid size and time limit based on difficulty
    gridSize =
      difficultySelect.value === "easy"
        ? 3
        : difficultySelect.value === "hard"
        ? 5
        : 4;
    totalSeconds = timeLimits[difficultySelect.value];
    secondsRemaining = totalSeconds;

    // Add difficulty class to body
    document.body.classList.remove("easy", "medium", "hard");
    document.body.classList.add(difficultySelect.value);

    // Update Start Game button style dynamically
    const startButton = document.getElementById("start-button");
    startButton.classList.remove("easy", "medium", "hard");
    startButton.classList.add(difficultySelect.value);

    // Reset puzzle
    tiles = [...Array(gridSize * gridSize - 1).keys()].map((n) => n + 1);
    tiles.push(null); // Empty space

    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    renderGrid();
    resetTimer();
    winMessage.classList.add("hidden");
    shuffleButton.classList.remove("hidden");
    timeUpButton.classList.add("hidden");
  }

  function initPuzzle() {
    // Set grid size and time limit based on difficulty
    gridSize =
      difficultySelect.value === "easy"
        ? 3
        : difficultySelect.value === "hard"
        ? 5
        : 4;
    totalSeconds = timeLimits[difficultySelect.value];
    secondsRemaining = totalSeconds;

    // Add difficulty class to body
    document.body.classList.remove("easy", "medium", "hard");
    document.body.classList.add(difficultySelect.value);

    // Update difficulty dropdown styles
    difficultySelect.classList.remove("easy", "medium", "hard");
    difficultySelect.classList.add(difficultySelect.value);

    // Prepare the tiles
    tiles = [...Array(gridSize * gridSize - 1).keys()].map((n) => n + 1);
    tiles.push(null); // Empty space

    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    renderGrid();
    resetTimer();
    winMessage.classList.add("hidden");
    shuffleButton.classList.remove("hidden");
    timeUpButton.classList.add("hidden");
  }

  // Render the grid
  function renderGrid() {
    grid.innerHTML = "";
    tiles.forEach((tile, index) => {
      const tileElement = document.createElement("div");
      tileElement.classList.add("tile");
      if (tile === null) {
        tileElement.classList.add("empty");
      } else {
        tileElement.textContent = tile;
        tileElement.addEventListener("click", () => moveTile(index));
      }
      grid.appendChild(tileElement);
    });
  }

  // Move the tile
  function moveTile(index) {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [
      emptyIndex - 1, // Left
      emptyIndex + 1, // Right
      emptyIndex - gridSize, // Up
      emptyIndex + gridSize, // Down
    ];

    if (
      validMoves.includes(index) &&
      Math.abs((emptyIndex % gridSize) - (index % gridSize)) +
        Math.abs(
          Math.floor(emptyIndex / gridSize) - Math.floor(index / gridSize)
        ) ===
        1
    ) {
      [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
      renderGrid();
      checkWin();
    }
  }

  // Reference to the Stop Button
  const stopButton = document.getElementById("stop-button");

  // Stop Button functionality
  stopButton.addEventListener("click", stopGame);

  function stopGame() {
    // Clear the grid
    grid.innerHTML = "";

    // Stop the timer
    clearInterval(timerInterval);

    // Reset the timer display
    timerDisplay.textContent = "Game Stopped";

    // Hide other buttons as needed
    shuffleButton.classList.add("hidden");
    timeUpButton.classList.add("hidden");

    // Optionally re-enable the Start Button
    const startButton = document.getElementById("start-button");
    startButton.disabled = false;

    // Add a "Game Stopped" message
    winMessage.textContent = "Game Stopped! Restart to play again.";
    winMessage.classList.remove("hidden");
  }

  // Check if the puzzle is solved
  function checkWin() {
    const isSolved = tiles.slice(0, -1).every((tile, i) => tile === i + 1);
    if (isSolved) {
      clearInterval(timerInterval);
      timeTaken.textContent = formatTime(totalSeconds - secondsRemaining);
      winMessage.classList.remove("hidden");
      shuffleButton.classList.add("hidden");
    }
  }

  // Timer functions
  function startTimer() {
    resetTimer();
    timerInterval = setInterval(() => {
      secondsRemaining--;
      timerDisplay.textContent = `Time Left: ${formatTime(secondsRemaining)}`;
      if (secondsRemaining <= 0) {
        clearInterval(timerInterval);
        gameOver();
      }
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    secondsRemaining = totalSeconds;
    timerDisplay.textContent = `Time Left: ${formatTime(secondsRemaining)}`;
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  }

  // Game over when time runs out
  function gameOver() {
    grid.innerHTML = ""; // Clear the grid
    timerDisplay.textContent = "Time's up!";
    timeUpButton.classList.remove("hidden"); // Show the "Time's Up" button
  }

  // Reset the game when "Time's Up" button is clicked
  function resetGame() {
    timeUpButton.classList.add("hidden");
    initPuzzle();
  }

  function gameOver() {
    grid.innerHTML = ""; // Clear the grid
    timerDisplay.textContent = "Time's up!";
    timeUpButton.classList.remove("hidden");
    timeUpButton.classList.add("visible"); // Show the "Time's Up" button
  }

  function resetGame() {
    timeUpButton.classList.add("hidden");
    timeUpButton.classList.remove("visible");
    initPuzzle();
  }

  function initPuzzle() {
    // Set grid size and time limit based on difficulty
    gridSize =
      difficultySelect.value === "easy"
        ? 3
        : difficultySelect.value === "hard"
        ? 5
        : 4;
    totalSeconds = timeLimits[difficultySelect.value];
    secondsRemaining = totalSeconds;

    // Add difficulty class to body or parent container
    document.body.classList.remove("easy", "medium", "hard");
    document.body.classList.add(difficultySelect.value);

    // Prepare the tiles
    tiles = [...Array(gridSize * gridSize - 1).keys()].map((n) => n + 1);
    tiles.push(null); // Empty space

    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    renderGrid();
    resetTimer();
    winMessage.classList.add("hidden");
    shuffleButton.classList.remove("hidden");
    timeUpButton.classList.add("hidden");
  }

  // Event listeners
  shuffleButton.addEventListener("click", shuffleTiles);
  startButton.addEventListener("click", initPuzzle);
  timeUpButton.addEventListener("click", resetGame); // Reset game when button is clicked

  // Initialize the game
  initPuzzle();
});
