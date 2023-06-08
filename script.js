let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".score").textContent = score;
document.querySelector(".highScore").textContent = highScore;
document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //No guess
  if (!guess) {
    displayMessage("No Number Entered");
  } //Player Wins
  else if (guess === secretNumber) {
    displayMessage("You Win 🎊");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
  } //Guess is different
  else if (guess != secretNumber) {
    displayMessage(guess > secretNumber ? `Too High ⬆️` : `Too Low ⬇️`);
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost ☹️");
      document.querySelector(".score").textContent = score;
    }
  }
});

//Play Again
document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
});

/*Guess High
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost ☹️";
    }
  } //Guess Low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost 😐";
    }
  } */
