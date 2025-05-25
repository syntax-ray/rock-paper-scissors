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