const inputField = document.getElementById("inputField");
const keys = document.querySelectorAll(".key");
let capsLock = false;

keys.forEach((key) => {
  key.addEventListener("click", () => {
    let keyValue = key.textContent;

    // Handle backspace key
    if (key.classList.contains("backspace")) {
      inputField.value = inputField.value.slice(0, -1);

      // Handle caps lock key
    } else if (key.classList.contains("caps-lock")) {
      capsLock = !capsLock;
      key.classList.toggle("active", capsLock);

      // Handle enter key
    } else if (key.classList.contains("enter")) {
      inputField.value += "\n";

      // Handle space key
    } else if (key.classList.contains("space")) {
      inputField.value += " ";

      // Handle other keys
    } else {
      inputField.value += capsLock
        ? keyValue.toUpperCase()
        : keyValue.toLowerCase();
    }
  });
});
