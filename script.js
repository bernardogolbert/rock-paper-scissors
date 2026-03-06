

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(choice)) {
        return choice;
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return getPlayerChoice();
    }
}



function game() {
    let humanScore = 0
    let computerScore = 0
    
    function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "It's a tie!";
            } else if (
                (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')
            ) {
                humanScore++
                return `You win! ${playerSelection} beats ${computerSelection}.`;
            } else {
                computerScore++
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            }
        }
        console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

game();
        

   
    





game(); 
