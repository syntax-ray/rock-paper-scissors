let POSSIBLE_CHOICES = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let userScoreDisplay = document.querySelector('#user-score');
let computerScoreDisplay = document.querySelector('#computer-score');
let alert = document.querySelector('#alert');


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
                return 'Lost Round';
            }
            if (computerChoice === "scissors") {
                playerScore += 1;
                return 'Won Round';
            }
            break;
        case 'paper':
            if (computerChoice === "rock") {
                playerScore += 1;
                return 'Won Round';
            }
            if (computerChoice === "scissors") {
                computerScore += 1;
                return 'Lost Round';
            }
            break; 
        case 'scissors':
            if (computerChoice === "rock") {
                computerScore += 1;
                return 'Lost Round';
            }
            if (computerChoice === "paper") {
                playerScore += 1;
                return 'Won Round';
            }
            break; 
        default:
            return 'Drew Round';
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

function showAlert(res) {
    if (res === 'Won Round') {
        alert.textContent = 'You won this round!';
        alert.style.color = 'green';
    } else if (res === 'Lost Round') {
        alert.textContent = 'You lost this round!';
        alert.style.color = 'red';
    } else {
        alert.textContent = 'This round was a draw!';
        alert.style.color = 'blue';
    }
    alert.style.display = 'block';
    setTimeout(() => {
        alert.textContent = '';
        alert.style.display = 'none';
    }, 1000);
    
}

rockBtn.addEventListener('click', () => {
    outcome = playRound('rock', getComputerChoice());
    updateScoreDisplay();
    showAlert(outcome)
});
paperBtn.addEventListener('click', () => {
    outcome = playRound('paper', getComputerChoice());
    updateScoreDisplay();
    showAlert(outcome);
});
scissorsBtn.addEventListener('click', () => {
    outocme = playRound('scissors', getComputerChoice());
    updateScoreDisplay();
    showAlert(outcome);
});
