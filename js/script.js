const selections = ["Rock", "Paper", "Scissors"];
const lose = 0;
const win = 1;
const draw = 2;

function getPlayerSelection () {
    let playerSelection = null;
    let valid = false;
    while (!valid) {
        playerSelection = prompt("Please enter rock, paper, or scissors.");
        // Formats the user input for proper string comparison 
        playerSelection = playerSelection.charAt(0).toUpperCase() + 
                playerSelection.slice(1).toLowerCase();
        valid = validateSelection(playerSelection);
    }
    console.log(`Player chooses ${playerSelection}.`);
    return playerSelection;
}

function validateSelection(playerSelection) {
    for (let i = 0; i < selections.length; i++) {
        if (playerSelection == selections[i]) {
            return true;
        }
    }
    alert("Invalid selection. Please try again.");
    return false;
}

function computerPlay() {
    let rand = Math.floor(Math.random()*selections.length);
    let computerSelection = selections[rand];
    console.log(`Computer chooses ${computerSelection}.`);
    return computerSelection;
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Draw!");
        return draw;
    }
    // If not draw, figure out winning combination.
    winCondition = getWinCondition(playerSelection);

    if (computerSelection == winCondition) {
        console.log("Player wins!");
        return win;
    }
    else {
        console.log("Player loses!");
        return lose;
    }
}

function getWinCondition(playerSelection) {
    // These maintain the game logic if the selection values are renamed in the array
    let rock = selections[0];
    let paper = selections[1];
    let scissors = selections[2];

    // Returns what computer must choose for player to win
    switch (playerSelection) {
        case rock: 
            return scissors; 
        case paper: 
            return rock; 
        case scissors: 
            return paper;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    let result;

    // Play i rounds of rock, paper, scissors and reports score.
    for (let i = 0; i < 5; i++) {
        result = singleRound(getPlayerSelection(), computerPlay());
        if (result == lose) {
            computerScore++;
        }
        else if (result == win) {
            playerScore++;
        }
        else if (result == draw) {
            draws++;
        }
        console.log(`
        Player Score: ${playerScore} Computer Score: ${computerScore} Draws: ${draws}
        `);
    }

    printFinalScore(playerScore, computerScore, draws);
}

function printFinalScore(playerScore, computerScore, draws) {
    console.log(`******************************`);
    console.log(` Final Score                `);
    console.log(` Player: ${playerScore}     `);
    console.log(` Computer: ${computerScore} `); 
    console.log(` Draws: ${draws} `); 
    console.log(`******************************`);    
           
    if (playerScore > computerScore) {
        console.log(`\n***Player Wins!***`);
    }
    else {
        console.log(`\n***Player Loses!***`);
    }
}