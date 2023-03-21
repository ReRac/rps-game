const getComputerChoice = Math.floor(Math.random() * 3);
if (getComputerChoice == 0) {
  console.log("rock");
} else if (getComputerChoice == 1) {
  console.log("paper");
} else {
  console.log("scissors");
}
const computerSelection = getComputerChoice;


const getPlayerChoice = (playerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if(playerSelection === "rock", playerSelection === "paper", playerSelection === "scissors" ) {
    console.log(playerSelection);
  } else {
    console.log("Input not valid");
  }
}
);

const playerSelection = getPlayerChoice.toLowerCase();
console.log(getComputerChoice, getComputerChoice);