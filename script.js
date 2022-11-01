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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const choices = ['Rock', 'Paper', 'Scissors'];

    for (let i = 0; i < 5; i++) {
        // Print score
        console.log(`Score: ${playerScore} : ${computerScore} (player : computer)`);
        // Get input from user 
        let playerSelection = prompt("Enter one of these choices: " + choices.join(', '));
        // Generate random choice for computer
        let computerSelection = getComputerChoice();

        // Get result and convert it to lower case
        let result = playRound(playerSelection, computerSelection).toLowerCase();
        if (result.includes('win'))
            playerScore++;
        else if (result.includes('lose'))
            computerScore++;
        else if (result.includes('tie')) {
            playerScore++;
            computerScore++;
        }
        else return "Error happened, Invalid result string from 'playRound' function.";
    }

    let finalRes = `Score: ${playerScore} : ${computerScore} (player : computer)\n`;
    if (playerScore > computerScore)
        finalRes += 'Player wins!!! :D';
    else if (playerScore < computerScore)
        finalRes += 'Player loses... :(';
    else // Tie.
        finalRes += "It's a tie! :o";
    return finalRes;
}


console.log(game());