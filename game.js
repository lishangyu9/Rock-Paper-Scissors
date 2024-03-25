let scoreValue = 0;
let score = document.getElementById("scoreValue");
let rockButton = document.getElementById("rockBtn");
let paperButton = document.getElementById("paperBtn");
let scissorsButton = document.getElementById("scissorsBtn");
let playDiv = document.getElementById("playDiv");
let resultDiv = document.getElementById("resultDiv");
let resultTxt = document.getElementById("result");
let playAgainBtn = document.getElementById("playAgainBtn");
let yourChoiceTxt = document.getElementById("youPicked");
let computerChoiceTxt = document.getElementById("theHousePicked");

let computerChoice = 0;
let yourChoice = 0;
let result = "";

playDiv.style.display = "block";
resultDiv.style.display = "none";

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
  showResult();
}

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
    result = "It's a tie!";
  } else if (playerSelection == 0 && computerSelection == 1) {
    console.log("You lose! Paper beats rock!");
    result = "You lose! Paper beats rock!";
  } else if (playerSelection == 0 && computerSelection == 2) {
    console.log("You win! Rock beats scissors!");
    result = "You win! Rock beats scissors!";
    updateScore();
  } else if (playerSelection == 1 && computerSelection == 0) {
    console.log("You win! Paper beats rock!");
    result = "You win! Paper beats rock!";
    updateScore();
  } else if (playerSelection == 1 && computerSelection == 2) {
    console.log("You lose! Scissors beats paper!");
    result = "You lose! Scissors beats paper!";
  } else if (playerSelection == 2 && computerSelection == 0) {
    console.log("You lose! Rock beats scissors!");
    result = "You lose! Rock beats scissors!";
  } else if (playerSelection == 2 && computerSelection == 1) {
    console.log("You win! Scissors beats paper!");
    result = "You win! Scissors beats paper!";
    updateScore();
  }
}

function restartGame() {
  playDiv.style.display = "block";
  resultDiv.style.display = "none";
}

function showResult() {
  console.log("showResult");
  playDiv.style.display = "none";
  resultDiv.style.display = "block";

  if (yourChoice == 0) {
    yourChoiceTxt.innerText = "Rock";
  } else if (yourChoice == 1) {
    yourChoiceTxt.innerText = "Paper";
  } else {
    yourChoiceTxt.innerText = "Scissors";
  }
  if (computerChoice == 0) {
    computerChoiceTxt.innerText = "Rock";
  } else if (computerChoice == 1) {
    computerChoiceTxt.innerText = "Paper";
  } else {
    computerChoiceTxt.innerText = "Scissors";
  }

  resultTxt.innerText = result;
}

playAgainBtn.addEventListener("click", function(){
  restartGame();
});