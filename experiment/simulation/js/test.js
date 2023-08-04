

let intervalId;
let timerRunning = false;

function startTimer(duration, display) {
  let timer = duration;
  let minutes, seconds;

  intervalId = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalId);
      display.textContent = "00:00";
      
    }
  }, 1000);
}


function toggleTimer() {
  const display = document.getElementById("timer");
  const duration = 30; // Time in seconds

  if (timerRunning) {
    clearInterval(intervalId);
    document.getElementById("startButton");
  } else {
    startTimer(duration, display);
    document.getElementById("startButton");
  }

  timerRunning = !timerRunning;
}


document.getElementById("startButton").addEventListener("click", toggleTimer);

  