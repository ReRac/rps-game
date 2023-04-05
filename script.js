function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You won the round!`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You won the round!`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You won the round!`;
  } else {
    return `You lost this round!`;
  }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
