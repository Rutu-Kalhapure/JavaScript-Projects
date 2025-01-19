function startTime() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  // Add leading zero if minutes or seconds are less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let hrs = document.getElementById("hours");
  hrs.textContent = hours;
  let mins = document.getElementById("mins");
  mins.textContent = minutes;
  let secs = document.getElementById("secs");
  secs.textContent = seconds;
  setTimeout(startTime, 1000);
}

startTime();
