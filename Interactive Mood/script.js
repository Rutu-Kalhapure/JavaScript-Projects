document.getElementById("myMood").addEventListener("submit", function (event) {
  event.preventDefault();
  const mood = document.getElementById("mood").value;
  let message = "";

  if (mood === "happy") {
    message = "That's wonderful! Keep smiling 😊";
  } else if (mood === "sad") {
    message = "I'm sorry to hear that. Here's a virtual hug 🤗";
  } else if (mood === "neutral") {
    message = "Hope your day gets even better! 😐";
  }

  document.getElementById("messages").textContent = message;
});
