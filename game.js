let scoreValue = 0;
let score = document.getElementById("scoreValue");
let rockButton = document.getElementById("rockBtn");
let paperButton = document.getElementById("paperBtn");
let scissorsButton = document.getElementById("scissorsBtn");

let computerChoice = 0;
let yourChoice = 0;


function updateScore() {
  scoreValue++;
  score.innerHTML = scoreValue;
  console.log(scoreValue);
}

rockButton.addEventListener("click", function(){
  console.log("rock button clicked");
  yourChoice = 0;
  playGame();
});

paperButton.addEventListener("click", function(){
  console.log("paper button clicked");
  yourChoice = 1;
  playGame();
});

scissorsButton.addEventListener("click", function(){
  console.log("scissors button clicked");
  yourChoice = 2;
  playGame();
});

function playGame() {
  computerChoice = computerPlay();
  console.log("Computer choice: " + computerChoice);
  console.log("Your choice: " + yourChoice);
  playRound(yourChoice, computerChoice);
}

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection == 0 && computerSelection == 1) {
    console.log("You lose! Paper beats rock!");
  } else if (playerSelection == 0 && computerSelection == 2) {
    console.log("You win! Rock beats scissors!");
    updateScore();
  } else if (playerSelection == 1 && computerSelection == 0) {
    console.log("You win! Paper beats rock!");
    updateScore();
  } else if (playerSelection == 1 && computerSelection == 2) {
    console.log("You lose! Scissors beats paper!");
  } else if (playerSelection == 2 && computerSelection == 0) {
    console.log("You lose! Rock beats scissors!");
  } else if (playerSelection == 2 && computerSelection == 1) {
    console.log("You win! Scissors beats paper!");
    updateScore();
  }
}