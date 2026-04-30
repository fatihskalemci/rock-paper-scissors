let playerScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let choice = prompt("rock, paper or scissors?");
  return choice
}

function compareHands(playerSelection, computerSelection){

  if (playerSelection === computerSelection) return "tie";
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
      result = "tie"
      break;
  }

  return result;
}

function playRound(playerSelection) {

  if (computerScore >= 5 || playerScore >= 5) {
    winner = computerScore > playerScore ? "computer" : "player"
    roundP.textContent =`${winner.toUpperCase()} WON!`;
    return 0
  }

  let computerSelection = getComputerChoice().toLowerCase();

  let result = compareHands(playerSelection, computerSelection);

  if (result === "win") {
    roundP.textContent =`Point to player! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (result === "lose") {
    roundP.textContent =`Point to computer! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else {
    roundP.textContent =`No Points! ${computerSelection} and ${playerSelection} ends in a draw`;
  }

  scoreP.textContent = `Player ${playerScore} - ${computerScore} Computer`

}

function game(){
  rockButton = document.querySelector("#rock");
  paperButton = document.querySelector("#paper");
  scissorsButton = document.querySelector("#scissors");
  rockButton.addEventListener('click', () => playRound("rock"))
  paperButton.addEventListener('click', () => playRound("paper"))
  scissorsButton.addEventListener('click', () => playRound("scissors"))


  resultDiv = document.querySelector(".results");
  scoreP = document.createElement("p");
  roundP = document.createElement("p");

  resultDiv.appendChild(scoreP)
  resultDiv.appendChild(roundP)

  scoreP.textContent = `Player ${playerScore} - ${computerScore} Computer`
  roundP.textContent =`GAME START`;
}

game()
