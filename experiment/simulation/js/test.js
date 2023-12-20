let intervalId; // Variable to store the interval ID
let timerRunning = false;
let firstReadingDisplayed = false;

// Function to start the timer
function startTimer(duration, display) {
  let timer = duration;
  let minutes, seconds;

  document.getElementById("rpmReading").textContent = "H 1 : ";
  document.getElementById("rpmReading2").textContent = "H 2 : ";

  intervalId = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalId);
      display.textContent = "00:00";
      timerRunning = false;
      if (!firstReadingDisplayed) {
        displayRandomValue();
        firstReadingDisplayed = true;
        setTimeout(stopTimer, 10000); // Stop the timer after 10 seconds
      }
    }
  }, 1000);
}

// Function to toggle the timer
function toggleTimer() {
  const display = document.getElementById("timer");
  const duration = 30; // Time in seconds

  if (timerRunning) {
    clearInterval(intervalId);
    document.getElementById("toggleButton");
  } else {
    startTimer(duration, display);
    document.getElementById("toggleButton");
  }

  timerRunning = !timerRunning;

  if (!timerRunning) {
    displayRandomValue();
  }
}

// Function to display a random value when the timer stops
function displayRandomValue() {
  const rpmReading = document.getElementById("rpmReading");
  const rpmReading2 = document.getElementById("rpmReading2")
  const randomValue = Math.floor(Math.random() * 100)+1;
  const randomValue3 = Math.floor(Math.random() * 100)+1;
  rpmReading.textContent = "H 1 : " + randomValue;
  
  rpmReading2.textContent = "H 2 : " +randomValue3;
}

function stopTimer() {
  
    clearInterval(intervalId);

    document.getElementById("toggleButton");
    timerRunning = false;
  }
// Toggle the timer when the button is clicked
document.getElementById("toggleButton").addEventListener("click", toggleTimer);
