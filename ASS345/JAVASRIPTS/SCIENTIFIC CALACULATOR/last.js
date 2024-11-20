let display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function appendDot() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function calculateSquareRoot() {
  display.value = Math.sqrt(parseFloat(display.value));
}

function calculateSquare() {
  display.value = Math.pow(parseFloat(display.value), 2);
}

function calculateSin() {
  display.value = Math.sin((parseFloat(display.value) * Math.PI) / 180).toFixed(
    4
  );
}

function calculateCos() {
  display.value = Math.cos((parseFloat(display.value) * Math.PI) / 180).toFixed(
    4
  );
}

function calculateTan() {
  display.value = Math.tan((parseFloat(display.value) * Math.PI) / 180).toFixed(
    4
  );
}
