function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

// function playerSelection = (getPlayerChoice{
//   let playerSelection = playerSelection.toLowerCase();
//   if (
//     playerSelection === "rock" ||
//     playerSelection === "paper" ||
//     playerSelection === "scissors"
//   ) {
//     console.log(playerSelection);
//   } else {
//     console.log("Input not valid");
//   }
// };

// console.log(getComputerChoice, playerSelection);

// // const playRound = (playerSelection, computerSelection) => {
// //   if (playerSelection === computerSelection) {
// //     console.log("It's a tie!");
// //   } else if (
// //     (playerSelection === "rock" && computerSelection === "paper") ||
// //     (playerSelection === "paper" && computerSelection === "scissors") ||
// //     (playerSelection === "scissors" && computerSelection === "rock")
// //   ) {
// //     console.log(
// //       "You lost!" + playerSelection + " lost for " + computerSelection + "."
// //     );
// //   } else {
// //     console.log(
// //       "You won!" + playerSelection + " lost for " + computerSelection + "."
// //     );
// //   }
// // };
// // console.log(playRound);
