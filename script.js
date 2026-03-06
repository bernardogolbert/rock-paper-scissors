let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const results = document.querySelector("#results");

rockBtn.addEventListener("click", () => {
  results.textContent =
    playRound("rock") + `Score: ${humanScore} - ${computerScore}`;
  if (humanScore === 5) {
    alert(" Você venceu!");
    location.reload();
  } else if (computerScore === 5) {
    alert(" Computador venceu!");
    location.reload();
  }
});

paperBtn.addEventListener("click", () => {
  results.textContent =
    playRound("paper") + `Score: ${humanScore} - ${computerScore}`;
  if (humanScore === 5) {
    alert(" Você venceu!");
    location.reload();
  } else if (computerScore === 5) {
    alert(" Computador venceu!");
    location.reload();
  }
});

scissorsBtn.addEventListener("click", () => {
  results.textContent =
    playRound("scissors") + `Score: ${humanScore} - ${computerScore}`;
  if (humanScore === 5) {
    alert(" Você venceu!");
    location.reload();
  } else if (computerScore === 5) {
    alert(" Computador venceu!");
    location.reload();
  }
});
