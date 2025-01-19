window.onload = function () {
  let tens = 0,
    seconds = 0,
    minutes = 0;
  let interval;

  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const restartBtn = document.getElementById("restart");
  const appendTens = document.getElementById("tens");
  const appendSeconds = document.getElementById("seconds");
  const appendMinutes = document.getElementById("minutes");

  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendTens.textContent = "0" + tens;
    } else {
      appendTens.textContent = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.textContent = seconds <= 9 ? "0" + seconds : seconds;
      tens = 0;
      appendTens.textContent = "00";
    }
    if (seconds > 59) {
      minutes++;
      appendMinutes.textContent = minutes <= 9 ? "0" + minutes : minutes;
      seconds = 0;
      appendSeconds.textContent = "00";
    }
  }

  startBtn.addEventListener("click", function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });

  stopBtn.addEventListener("click", function () {
    clearInterval(interval);
  });

  restartBtn.addEventListener("click", function () {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    appendTens.textContent = "00";
    appendSeconds.textContent = "00";
    appendMinutes.textContent = "00";
  });
};
