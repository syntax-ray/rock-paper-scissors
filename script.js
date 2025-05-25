let POSSIBLE_CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return POSSIBLE_CHOICES[choice];
}

function getHumanChoice() {
    let choice = prompt("Please enter your move").trim().toLowerCase();
    return  POSSIBLE_CHOICES.includes(choice) ? choice : undefined
}