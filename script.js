function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    // Returns the computer's choice, either 'Rock', 'Paper', or 'Scissors'.
    let choices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = choices[getRandomInt(3)];
    return compChoice;
}

function declareWinner(winOrLose, yourChoice, theirChoice) {
    // Returns a string describing who won and why.

    if (winOrLose === 'W')
        return 'You Win! ' + yourChoice + ' beats ' + theirChoice;
    else if (winOrLose === 'L')
        return 'You Lose! ' + theirChoice + ' beats ' + yourChoice;
    else return 'declareWinner: winOrLose param value not valid!';
}

function playRound(playerSelection, computerSelection) {
    // Plays a round of the game, and returns a string indicating who won, e.g. "You Lose! Paper beats Rock".
    playerSelection = capitalizeFirstLetter(playerSelection.toLowerCase());
    computerSelection = capitalizeFirstLetter(computerSelection.toLowerCase());

    let choices = ['Rock', 'Paper', 'Scissors'];
    // Check if selections are valid or not
    if (!(choices.includes(playerSelection) && choices.includes(computerSelection)))
        return "Error: selection invalid";

    if (playerSelection === computerSelection)
        return "TIE!"

    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors')
            return declareWinner('W', playerSelection, computerSelection);
        else // We can assume computer chose 'Paper', because we know they didn't tie.
            return declareWinner('L', playerSelection, computerSelection);
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock')
            return declareWinner('W', playerSelection, computerSelection);
        else // Computer chose 'Scissors'.
            return declareWinner('L', playerSelection, computerSelection);
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper')
            return declareWinner('W', playerSelection, computerSelection);
        else // Computer chose 'Rock'.
            return declareWinner('L', playerSelection, computerSelection);
    }

    return "I don't know how you got here";
}

