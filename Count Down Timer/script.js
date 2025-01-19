document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");

  let countdown;
  let timeLeft = 600; // 10 minutes in seconds

  function startTimer() {
    if (countdown) return;
    countdown = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(countdown);
        countdown = null;
        alert("Time's up!");
      } else {
        timeLeft--;
        displayTimeLeft(timeLeft);
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(countdown);
    countdown = null;
  }

  function displayTimeLeft(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const display = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timerElement.textContent = display;
  }

  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);

  displayTimeLeft(timeLeft);
});
