let POSSIBLE_CHOICES = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return POSSIBLE_CHOICES[choice];
}

function getPlayerChoice() {
    let choice = prompt("Please enter your move").trim().toLowerCase();
    return  POSSIBLE_CHOICES.includes(choice) ? choice : undefined;
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