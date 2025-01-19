var inc = 1000; // Set the interval time to 1000 milliseconds (1 second).

clock(); // Call the clock function immediately to initialize the clock.

function clock() {
  // Define the clock function to update the clock hands.
  const date = new Date(); // Create a new Date object to get the current date and time.

  const hours = ((date.getHours() + 11) % 12) + 1; // Convert 24-hour format to 12-hour format.
  const minutes = date.getMinutes(); // Get the current minutes.
  const seconds = date.getSeconds(); // Get the current seconds.

  const hour = hours * 30; // Calculate the degree for the hour hand (30 degrees per hour).
  const minute = minutes * 6; // Calculate the degree for the minute hand (6 degrees per minute).
  const second = seconds * 6; // Calculate the degree for the second hand (6 degrees per second).

  // Rotate the hour hand to the calculated degree.
  document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
  // Rotate the minute hand to the calculated degree.
  document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
  // Rotate the second hand to the calculated degree.
  document.querySelector(".second").style.transform = `rotate(${second}deg)`;
}

setInterval(clock, inc); // Set the clock function to run every 1 second (1000 milliseconds).
