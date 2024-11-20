const inputField = document.getElementById("inputField");
const keys = document.querySelectorAll(".key");
let capsLock = false;

keys.forEach((key) => {
  key.addEventListener("click", () => {
    let keyValue = key.textContent;

    if (key.classList.contains("backspace")) {
      inputField.value = inputField.value.slice(0, -1);
    } else if (key.classList.contains("caps-lock")) {
      capsLock = !capsLock;
      key.classList.toggle("active", capsLock);
    } else if (key.classList.contains("enter")) {
      inputField.value += "\n";
    } else if (key.classList.contains("space")) {
      inputField.value += " ";
    } else if (key.classList.contains("shift")) {
      // Add shift functionality if needed
    } else {
      inputField.value += capsLock
        ? keyValue.toUpperCase()
        : keyValue.toLowerCase();
    }
  });
});
