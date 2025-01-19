const flashcards = [
  {
    question: "What is the capital of India?",
    answer: "New Delhi",
  },
  {
    question: "What is 2 + 2?",
    answer: "4",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
];

let currentIndex = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const showAnswerBtn = document.getElementById("showAnswerBtn");

function showFlashcard(index) {
  questionElement.textContent = flashcards[index].question;
  answerElement.textContent = "";
}

function showAnswer() {
  answerElement.textContent = flashcards[currentIndex].answer;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showFlashcard(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showFlashcard(currentIndex);
});

showAnswerBtn.addEventListener("click", showAnswer);

// Initialize the first flashcard
showFlashcard(currentIndex);
