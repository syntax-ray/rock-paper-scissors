let POSSIBLE_CHOICES = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return POSSIBLE_CHOICES[choice];
}

function getPlayerChoice() {
    let choice = prompt("Please enter your move").trim().toLowerCase();
    return  POSSIBLE_CHOICES.includes(choice) ? choice : getPlayerChoice();
}

function playRound(playerChoice, computerChoice) {
    switch(playerChoice) {
        case 'rock':
            if (computerChoice === "paper") {
                computerScore += 1;
            }
            if (computerChoice === "scissors") {
                playerScore += 1;
            }
            break;
        case 'paper':
            if (computerChoice === "rock") {
                playerScore += 1;
            }
            if (computerChoice === "scissors") {
                computerScore += 1;
            }
            break; 
        case 'scissors':
            if (computerChoice === "rock") {
                computerScore += 1;
            }
            if (computerChoice === "paper") {
                playerScore += 1;
            }
            break; 
        default:
            alert("Wrong game :)");
    } 
}


function playGame() {
    for (let i = 0; i < 5; i++ ) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if (playerScore === computerScore) {
        console.log(`The game ended in a draw [${playerScore} - ${computerScore}]`);
    }
    if (playerScore > computerScore) {
        console.log(`Congratulations, you won :) [${playerScore} - ${computerScore}]`);
    }
    if (playerScore < computerScore) {
        console.log(`Unfortunately, You lost :( [${playerScore} - ${computerScore}]`)
    }
    playerScore = 0;
    computerScore = 0;
}