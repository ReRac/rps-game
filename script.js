// REFACTORING code
"use-strict"
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors
");


const computerSelection = 
const playerSelection =

const playRound = 
const status = 

const computerScore = 
const playerScore = 

const reset = 
const winner = 

// animation part 




//Computer picks random choice
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
