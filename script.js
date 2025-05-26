let POSSIBLE_CHOICES = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let userScoreDisplay = document.querySelector('#user-score');
let computerScoreDisplay = document.querySelector('#computer-score');


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
    alert("You are about to play rock paper scissors vs the super computer");
    alert("You will play 5 rounds and then the winner and loser will be declared");
    for (let i = 0; i < 5; i++ ) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if (playerScore === computerScore) {
        alert(`The game ended in a draw [${playerScore} - ${computerScore}]`);
    }
    if (playerScore > computerScore) {
        alert(`Congratulations, you won :) [${playerScore} - ${computerScore}]`);
    }
    if (playerScore < computerScore) {
        alert(`Unfortunately, You lost :( [${playerScore} - ${computerScore}]`)
    }
    playerScore = 0;
    computerScore = 0;
}

function updateScoreDisplay() {
    userScoreDisplay.textContent = `User: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    updateScoreDisplay();
});
paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    updateScoreDisplay();
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    updateScoreDisplay();
});
