// Computer picks random choice
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}
const computerSelection = getComputerChoice();
// user- choice input case insensitive
function getUserChoice() {
  const userChoice = prompt(
    "Choose between rock, paper or scissors. You need to win 5 times, and you will save this kitty!"
  );
  return userChoice.toLocaleLowerCase();
}

const playerSelection = getUserChoice();

// function returns result of the round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return `You won the round, ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return `You won the round, ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return `You won the round, ${playerSelection} beats ${computerSelection}!`;
  } else {
    computerScore++;
    return `You lost this round!`;
  }
}

let computerScore = 0;
let playerScore = 0;

// Score message

// loop for 5 game rounds
function game() {
  for (let i = 0; i < 4; i++) {
    const computerSelection = getComputerChoice();
    playRound(prompt("What do you choose?"), computerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);
  }
}
// check who will become the winner of five rounds
function winner() {
  if (playerScore <= 5) {
    console.log(
      "You have saved the kitten! Well done! Score " +
        playerScore +
        " to  " +
        computerScore
    );
  } else if (computerScore <= 5) {
    console.log(
      "OMG poor kitten...! Score " + playerScore + " to  " + computerScore
    );
  } else if (computerScore === playerScore) {
    console.log("oh, it;s a tie! Kitty have another chance to be saved.");
  }
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(winner);
game();

// REFACTORING code UI
("use-strict");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const scoresMessage = document.querySelector("scores-messages");
const computerScores = document.querySelector(".cscore");
const playerScores = document.querySelector(".pscore");
const reset = document.querySelector("reset");
const winnerMessage = document.querySelector(".modal");

const displayMessage = function (message) {
  document.querySelector(".const message").textContent = message;
};

buttons.forEach((button) => {
  button.addEventListener("click", getUserChoice);
});
// dont forget reset

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    displayMessage(`It's a tie!`);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    displayMessage(
      `You won the round, ${playerSelection} beats ${computerSelection}!`
    );
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    displayMessage(
      `You won the round, ${playerSelection} beats ${computerSelection}!`
    );
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    displayMessage(
      `You won the round, ${playerSelection} beats ${computerSelection}!`
    );
    playerScore++;
  } else {
    displayMessage(`You lost this round!`);
    computerScore++;
  }
  checkWinner();
}

function checkWinner() {
  if (playerScore <= 5) {
    displayMessage(`You have saved the kitten! Well done! P " +
    ${playerScore} 
      " to  " +
      C ${computerScore}`);
  } else if (computerScore <= 5) {
    displayMessage(`
    "OMG poor kitten...!`);
  } else if (computerScore === playerScore) {
    displayMessage(`Oh, a tie! Kitty have another chance to be saved`);
  }
}
