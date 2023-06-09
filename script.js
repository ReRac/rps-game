// // Computer picks random choice
// function getComputerChoice() {
//   const choice = ["rock", "paper", "scissors"];
//   return choice[Math.floor(Math.random() * choice.length)];
// }
// const computerSelection = getComputerChoice();
// // user- choice input case insensitive
// function getUserChoice() {
//   const userChoice = prompt(
//     "Choose between rock, paper or scissors. You need to win 5 times, and you will save this kitty!"
//   );
//   return userChoice.toLocaleLowerCase();
// }

// const playerSelection = getUserChoice();

// // function returns result of the round
// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return `It's a tie!`;
//   } else if (playerSelection === "rock" && computerSelection === "scissors") {
//     playerScore++;
//     return `You won the round, ${playerSelection} beats ${computerSelection}!`;
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     playerScore++;
//     return `You won the round, ${playerSelection} beats ${computerSelection}!`;
//   } else if (playerSelection === "scissors" && computerSelection === "paper") {
//     playerScore++;
//     return `You won the round, ${playerSelection} beats ${computerSelection}!`;
//   } else {
//     computerScore++;
//     return `You lost this round!`;
//   }
// }

// let computerScore = 0;
// let playerScore = 0;
// let winner = "";

// // Score message

// // loop for 5 game rounds
// function game() {
//   for (let i = 0; i < 4; i++) {
//     const computerSelection = getComputerChoice();
//     playRound(prompt("What do you choose?"), computerSelection);
//     console.log(playerSelection);
//     console.log(computerSelection);
//     console.log(playRound(playerSelection, computerSelection));
//     console.log(playerScore, computerScore);
//   }
// }
// // check who will become the winner of five rounds
// function winner() {
//   if (playerScore <= 5) {
//     console.log(
//       "You have saved the kitten! Well done! Score " +
//         playerScore +
//         " to  " +
//         computerScore
//     );
//   } else if (computerScore <= 5) {
//     console.log(
//       "OMG poor kitten...! Score " + playerScore + " to  " + computerScore
//     );
//   } else if (computerScore === playerScore) {
//     console.log("oh, it;s a tie! Kitty have another chance to be saved.");
//   }
// }

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
// console.log(winner);
// game();

// REFACTORING code UI
"use-strict";

const rock = document.getElementById("rock-game");
const paper = document.getElementById("paper-game");
const scissors = document.getElementById("scissors-game");
const scoresMessage = document.querySelector(".scores-messages");
const reset = document.getElementById("reset");
const restart = document.getElementById("restart");
const winnerMessage = document.querySelector(".modal");
const buttons = [rock, paper, scissors];
const pscore = document.querySelector(".pscore");
const cscore = document.querySelector(".score");

let computerScore = 0;
let playerScore = 0;
let winner = "";

const displayMessage = function (message) {
  document.querySelector(".scores-messages").textContent = message;
};

function disable() {
  document
    .querySelectorAll(".btn")
    .forEach((element) => (element.disabled = true));
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

//Compare player selection vs computer selection.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    displayMessage(`It's a tie!`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    document.querySelector(
      ".pscore"
    ).textContent = `Player Score: ${playerScore}`;
    displayMessage(
      `You won the round, ${playerSelection} beats ${computerSelection}!`
    );
  } else {
    computerScore++;
    displayMessage(`You lost this round!`);
    document.querySelector(
      ".cscore"
    ).innerText = `Computer Score: ${computerScore}`;
  }
  if (playerScore === 5) {
    displayMessage(
      `You have saved the kitten! Well done! P ${playerScore}  to  C ${computerScore}`
    );
    disable();
  } else if (computerScore === 5) {
    displayMessage(`"OMG poor kitten...!`);
    disable();
  }
}

function checkWinner() {
  const playerChoices = ["rock-game", "paper-game", "scissors-game"];

  buttons.forEach((game) => {
    game.addEventListener("click", () => {
      let computerSelection = getComputerChoice();
      if (playerChoices.includes(game.id)) {
        playRound(game.id.split("-")[0], computerSelection);
      }
    });
  });
}

function restartGame() {
  window.location.reload();
}

reset.addEventListener("click", restartGame);
restart.addEventListener("click", restartGame);

checkWinner();
