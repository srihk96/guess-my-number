let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".number").textContent = secretNumber;
document.querySelector(".score").textContent = score;
document.querySelector(".highScore").textContent = highScore;

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //No guess
  if (!guess) {
    document.querySelector(".message").textContent = "No Number Entered";
  } //Player Wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Guess!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
  } //Guess High
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost ☹️";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost 😐";
    }
  }
});

//Play Again
document.querySelector(".btn-again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = secretNumber;
  score = 20;
  document.querySelector(".score").textContent = score;
});
