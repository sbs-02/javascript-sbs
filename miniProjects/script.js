const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", function () {
  console.log(Math.random());
});

paper.addEventListener("click", function () {
  console.log(Math.random());
});

scissors.addEventListener("click", function () {
  console.log(Math.random());
});
