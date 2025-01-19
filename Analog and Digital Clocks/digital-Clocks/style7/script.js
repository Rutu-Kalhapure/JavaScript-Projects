"use strict";

function resizeClock() {
  // Collecting all data from HTML
  var circle = document.querySelectorAll(".clock-shape");
  var clockSize = "30rem";
  var circleSize = "calc(" + clockSize + " / 2)";
  var circleRadius = "calc((" + clockSize + " / 2) - 1rem)";
  // Resizing the circle size according to the SVG size
  for (let i = 0; i < circle.length; i++) {
    circle[i].setAttribute("cy", circleSize);
    circle[i].setAttribute("cx", circleSize);
    circle[i].setAttribute("r", circleRadius);
  }
}

function clockFun() {
  // Getting the time
  let time = new Date();
  let hour = time.getHours();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  // Styling the hours and minutes
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  // Updating the circle loader value with seconds
  document.documentElement.style.setProperty("--loadingSize", sec);
  // Selecting the hour, minute and colon
  const hourTxt = document.querySelector(".hour");
  const minTxt = document.querySelector(".min");
  var colon = document.querySelector(".colon");
  // Updating them with hour and minute value
  hourTxt.innerHTML = hour;
  minTxt.innerHTML = min;
  // Adding simple second effect to the colon
  if (!colon.classList.contains("sec")) {
    colon.classList.add("sec");
  }
}

// Initial call to resize the clock
resizeClock();
window.addEventListener("resize", resizeClock);

// Call clockFun every second
setInterval(clockFun, 1000);
