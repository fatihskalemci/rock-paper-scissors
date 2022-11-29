function getComputerChoice() {
  const random = Math.floor(Math.random() * 3)
  let choice
  if (random === 0) {
    choice = "rock";
  } else if (random === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie! What a bummer!";
  }

  switch (playerSelection) {
    case "rock":
      return computerSelection === "scissors" ? "You win! Rock beats Scissors." : "You lost! Paper beats Rock.";
      break;
    case "paper":
      return computerSelection === "rock" ? "You win! Paper beats Rock." : "You lost! Scissors beats Paper.";
      break;
    case "scissors":
      return computerSelection === "paper" ? "You win! Scissors beats Paper." : "You lost! Paper beats Rock.";
      break;
    default:
      break;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
