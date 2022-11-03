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
        return "TIE!";

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


// console.log(game());


const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const btnArr = [btnRock, btnPaper, btnScissors];
const pScore = document.getElementById("score");
const pMessage = document.getElementById("message");

let playerScore = 0;
let computerScore = 0;
const POINTS_TO_WIN = 5;

updateScore(pScore, playerScore, computerScore);
updateMessage(pMessage, "Press a button to start the game!");

function updateScore(p, playerScore, computerScore) {
    p.innerHTML = `Score: ${playerScore} : ${computerScore} (player : computer)`;
}
function updateMessage(p, msg) {
    p.innerHTML = msg;
}

function endGame(winOrLose) {
    // Display game ending message
    winOrLose = winOrLose.toLowerCase();
    if (winOrLose === 'tie') {
        updateMessage(pMessage, "TIE!! 😲");
    } else if (winOrLose === 'win') {
        updateMessage(pMessage, "YOU WIN! 🎉🎂🎉");
    } else if (winOrLose === 'lose') {
        updateMessage(pMessage, "You lose... 😭");
    }
    else {
        updateMessage(pMessage, "Error: I don't know what happened... But looks like the game is over.");
    }

    // Disable playable buttons
    btnArr.forEach(button => {
        button.disabled = true;
    });

}

btnArr.forEach(button => {
    console.log(button);
    button.addEventListener("click", (e) => {
        document.getElementById("message").innerHTML = e.target;
        console.log(typeof e.target.id);

        // Get input from user 
        const playerSelection = e.target.id;
        // Generate random choice for computer
        const computerSelection = getComputerChoice();

        // Get result
        const result = playRound(playerSelection, computerSelection);
        // Convert result to lower case to check who won
        const resultLwrCase = result.toLowerCase();

        if (resultLwrCase.includes('win')) {
            playerScore++;
        } else if (resultLwrCase.includes('lose')) {
            computerScore++;
        } else if (resultLwrCase.includes('tie')) {
            playerScore++;
            computerScore++;
        } else {
            console.log("Error happened, Invalid result string from 'playRound' function.");
            console.log(`result was: ${result}\n`);
        }
        // Update score and message
        updateScore(pScore, playerScore, computerScore);
        updateMessage(pMessage, result);

        // Check if someone won the game
        if (playerScore >= POINTS_TO_WIN || computerScore >= POINTS_TO_WIN) {
            if (playerScore === computerScore) { // Tie
                endGame('tie');
            } else if (playerScore > computerScore) { // Player Wins
                endGame('win');
            } else { // Player Loses
                endGame('lose');
            }
        }
    });
});