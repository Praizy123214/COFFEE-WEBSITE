let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

function start() {
  if (!timer) {
    timer = setInterval(run, 10);
  }
}

function run() {
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  document.getElementById("milliseconds").innerText = formatTime(milliseconds);
  document.getElementById("seconds").innerText = formatTime(seconds);
  document.getElementById("minutes").innerText = formatTime(minutes);
}

function stop() {
  clearInterval(timer);
  timer = false;
}

function reset() {
  clearInterval(timer);
  timer = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.getElementById("milliseconds").innerText = "00";
  document.getElementById("seconds").innerText = "00";
  document.getElementById("minutes").innerText = "00";
}

function formatTime(value) {
  //   return value < 10 ? `0${value}` : value;
  return value < 10 ? "0" + value : value;
}
