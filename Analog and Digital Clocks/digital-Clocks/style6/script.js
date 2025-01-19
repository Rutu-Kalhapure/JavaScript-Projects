const time = document.getElementById("time");
const day = document.getElementById("day");
const utc = document.getElementById("utc");
const colorArray = [
  "rgb(255,255,0)", // Yellow
  "rgb(0,255,255)", // Cyan
  "rgb(255,0,255)", // Magenta
  "rgb(255,0,0)", // Red
  "rgb(0,255,0)", // Green
  "rgb(255,165,0)", // Orange
  "rgb(255,105,180)", // Hot Pink
  "rgb(173,255,47)", // Green Yellow
  "rgb(144,238,144)", // Light Green
  "rgb(210,105,30)", // Chocolate
  "rgb(255,20,147)", // Deep Pink
  "rgb(32,178,170)", // Light Sea Green
  "rgb(255,140,0)", // Dark Orange
];

const color = ["red", "green"];
let colorIndex = 0;

function updateTime() {
  const now = new Date();

  // Cycle through the color array
  if (colorIndex === colorArray.length) {
    colorIndex = 0;
  }

  // Get time and date components
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  const dayOfMonth = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const dayOfWeek = now.getDay();

  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM";
  // Commented out line for 12-hour format conversion
  // hours = hours % 12 || 12;

  // Days and months arrays
  const days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
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

  // Update content
  day.textContent = days[dayOfWeek];
  utc.textContent = `${dayOfMonth} ${months[month]} ${year}`;
  time.textContent = `${hours} : ${minutes} : ${seconds} ${period}`;

  // Update colors
  const color = colorArray[colorIndex];
  time.style.color = color;
  utc.style.color = color;
  day.style.color = color;

  colorIndex++;
  setTimeout(updateTime, 1000);
}

updateTime();
