// Function to generate a random multiplication problem
function generateProblem() {
  const num1 = Math.floor(Math.random() * 15);
  const num2 = Math.floor(Math.random() * 15);
  return { num1, num2, answer: num1 * num2 };
}

// Initialize the game
let currentProblem = generateProblem();
const problemElement = document.getElementById("problem");
const answerElement = document.getElementById("answer");
const resultElement = document.getElementById("result");

// Function to check the answer
function checkAnswer() {
  const userAnswer = parseInt(answerElement.value);
  if (userAnswer === currentProblem.answer) {
    resultElement.textContent = "Correct! Well done!";
    currentProblem = generateProblem(); // Generate a new problem
    problemElement.textContent = `${currentProblem.num1} x ${currentProblem.num2} = `;
    answerElement.value = ""; // Clear the answer input
  } else {
    resultElement.textContent = "Incorrect. Try again.";
  }
}

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", checkAnswer);

// Event listener for the "Enter" key press
document.getElementById("answer").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

// Initial problem display
problemElement.textContent = `${currentProblem.num1} x ${currentProblem.num2} = `;
