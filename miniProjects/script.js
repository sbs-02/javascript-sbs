const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let randomNumber;
let computerMove;
let result;

rock.addEventListener("click", function () {
  // console.log(Math.random());

  randomNumber = Math.random(); //Generates a random number between 0 & 1
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 3) {
    computerMove = "scissors";
  }

  if (computerMove === "rock") {
    result = "TIE.";
  } else if (computerMove === "paper") {
    result = "YOU LOSE.";
  } else if (computerMove === "scissors") {
    result = "YOU WIN.";
  }

  alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
});

paper.addEventListener("click", function () {
  // console.log(Math.random());

  randomNumber = Math.random(); //Generates a random number between 0 & 1
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 3) {
    computerMove = "scissors";
  }

  if (computerMove === "rock") {
    result = "YOU WIN.";
  } else if (computerMove === "paper") {
    result = "TIE.";
  } else if (computerMove === "scissors") {
    result = "YOU LOSE.";
  }

  alert(`You picked paper. Computer picked ${computerMove}. ${result}`);
});

scissors.addEventListener("click", function () {
  // console.log(Math.random());

  randomNumber = Math.random(); //Generates a random number between 0 & 1
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 3) {
    computerMove = "scissors";
  }

  if (computerMove === "rock") {
    result = "YOU LOSE.";
  } else if (computerMove === "paper") {
    result = "YOU WIN.";
  } else if (computerMove === "scissors") {
    result = "TIE.";
  }

  alert(`You picked scissors. Computer picked ${computerMove}. ${result}`);
});
