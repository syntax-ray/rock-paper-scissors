let POSSIBLE_CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return POSSIBLE_CHOICES[choice];
}