const gameBoard = document.getElementById("game-board");
const statusText = document.getElementById("status");
const restartButton = document.getElementById("restart");

// Card data
const cardValues = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];
let cards = [...cardValues, ...cardValues]; // Duplicate for pairs
let flippedCards = [];
let matchedPairs = 0;

// Shuffle cards
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Initialize game
function initGame() {
  gameBoard.innerHTML = "";
  statusText.textContent = "";
  matchedPairs = 0;
  flippedCards = [];
  cards = shuffle(cards);

  cards.forEach((value, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value;
    card.addEventListener("click", () => handleCardClick(card));
    gameBoard.appendChild(card);
  });
}

// Handle card click
function handleCardClick(card) {
  if (flippedCards.length >= 2 || card.classList.contains("flipped")) return;

  card.textContent = card.dataset.value;
  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

// Check if two flipped cards match
function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.value === card2.dataset.value) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedPairs++;

    if (matchedPairs === cardValues.length) {
      statusText.textContent = "You matched all pairs! 🎉";
    }
  } else {
    setTimeout(() => {
      card1.textContent = "";
      card2.textContent = "";
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
    }, 1000);
  }

  flippedCards = [];
}

// Restart game
restartButton.addEventListener("click", initGame);

// Start the game
initGame();
