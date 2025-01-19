const time = document.getElementById("time");
const day = document.getElementById("day");
const utc = document.getElementById("utc");

function startTime() {
  const today = new Date();

  let hours = today.getHours();
  let mins = today.getMinutes();
  let secs = today.getSeconds();
  const dateNum = today.getDate();
  const month = today.getMonth();
  const yearNum = today.getFullYear();
  const dayNum = today.getDay();

  // Add leading zero if minutes or seconds are less than 10
  hours = String(hours).padStart(2, "0");
  mins = String(mins).padStart(2, "0");
  secs = String(secs).padStart(2, "0");

  // AM / PM
  const session = hours >= 12 ? "PM" : "AM";
  //   hours = hours % 12 || 12; // Convert to 12-hour format

  // Array for days of the week
  const days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  day.textContent = days[dayNum];

  // Array for months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Display date in DD Month YYYY format
  utc.textContent = `${dateNum} ${months[month]} ${yearNum}`;

  // Display time in HH:MM:SS AM/PM format
  const entireTime = `${hours} : ${mins} : ${secs} ${session}`;
  time.textContent = entireTime;

  setTimeout(startTime, 1000);
}

startTime();
