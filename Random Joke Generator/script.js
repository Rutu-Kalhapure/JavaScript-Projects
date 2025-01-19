const jokes = {
  puns: [
    "I used to play piano by ear, but now I use my hands.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
  ],
  knockknock: [
    "Knock, knock.\nWho's there?\nLettuce.\nLettuce who?\nLettuce in, it's cold out here!",
    "Knock, knock.\nWho's there?\nBoo.\nBoo who?\nDon't cry, it's just a joke!",
  ],
  random: [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call fake spaghetti? An impasta!",
  ],
};

function getRandomJoke() {
  const jokeTypes = Object.keys(jokes);
  const randomType = jokeTypes[Math.floor(Math.random() * jokeTypes.length)];
  const jokesArray = jokes[randomType];
  const randomJoke = jokesArray[Math.floor(Math.random() * jokesArray.length)];
  return { type: randomType, joke: randomJoke };
}

document.getElementById("jokeButton").addEventListener("click", () => {
  const jokeDisplay = document.getElementById("jokeDisplay");
  const randomJoke = getRandomJoke();

  let displayJoke = "";
  switch (randomJoke.type) {
    case "puns":
      displayJoke = `Pun: ${randomJoke.joke}`;
      break;
    case "knockknock":
      displayJoke = `Knock-Knock Joke: ${randomJoke.joke}`;
      break;
    case "random":
      displayJoke = `Random Joke: ${randomJoke.joke}`;
      break;
  }

  jokeDisplay.textContent = displayJoke;
});
