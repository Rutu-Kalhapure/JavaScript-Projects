function startTime() {
  const today = new Date();
  let hrs = today.getHours();
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  // Add leading zero if minutes or seconds are less than 10
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let hrsEl = document.getElementById("hours");
  hrsEl.textContent = hrs;

  let minsEl = document.getElementById("mins");
  minsEl.textContent = mins;

  let secEl = document.getElementById("secs");
  secEl.textContent = secs;
  setTimeout(startTime, 1000);
}

startTime();
