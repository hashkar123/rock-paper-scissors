function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    // Returns the computer's choice, either 'Rock', 'Paper', or 'Scissors'.
    choices = ['Rock', 'Paper', 'Scissors'];
    compChoice = choices[getRandomInt(3)];
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    // Plays a round of the game, and returns a string indicating who won, e.g. "You Lose! Paper beats Rock".

}

console.log(getComputerChoice());