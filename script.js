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
    return "tie";
  }

  // win lose case is on players perspective
  let result
  switch (playerSelection) {
    case "rock":
      result = computerSelection === "scissors" ? "win" : "lose";
      break;
    case "paper":
      result = computerSelection === "rock" ? "win" : "lose";
      break;
    case "scissors":
      result = computerSelection === "paper" ? "win" : "lose";
      break;
    default:
      break;
  }

  return result
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Player ${playerScore} - ${computerScore} Computer`)
    let playerSelection = prompt("rock, paper or scissors?");
    let computerSelection = getComputerChoice();
    let round = playRound(playerSelection, computerSelection);
    console.log(`Player chose: ${playerSelection} | Computer chose: ${computerSelection}`)
    if (round === "win") {
      console.log(`Point to player! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else if (round === "lose") {
      console.log(`Point to computer! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    }

  }

  if (playerScore > computerScore) {
    console.log(`Player: ${playerScore} - Computer: ${computerScore} | Player WINS`);
  } else if (playerScore < computerScore) {
    console.log(`Player: ${playerScore} - Computer: ${computerScore} | Computer WINS! YOU LOSE!`);
  } else {
    console.log("It's a DRAW!")
  }
}

/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

game()