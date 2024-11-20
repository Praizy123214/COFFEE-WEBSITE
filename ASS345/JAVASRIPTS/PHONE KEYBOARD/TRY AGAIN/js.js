// JavaScript to handle key click events and display key pressed
document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    alert(`You pressed: ${key.textContent}`);
  });
});
