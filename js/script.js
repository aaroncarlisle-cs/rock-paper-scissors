// Array of possible game selections for Rock, Paper, Scissors
let gameSelections = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    // Randomly return an array index to represent the computer's selection.
     return Math.floor(Math.random()*gameSelections.length);
}

function singleRound(playerSelection, computerSelection) {
    /**
     * Uses playerSelection and computerSelection to compute the winner
     * and then returns the result as a number.
     * 
     * @param {number} playerSelection - Player's selection as array index.
     * @param {number} computerSelection - Computer's selection as array index.
     * @return {number} - Returns 0 for Computer win, 1 for Player win, or 2 for Tie.
     */

    // Print selections into the console.
    console.log(`Player chooses ${gameSelections[playerSelection]}`);
    console.log(`Computer chooses ${gameSelections[computerSelection]}`);

    // Check for tie and return if true.
    if (playerSelection == computerSelection) {
        console.log("Tie game!");
        return 2;
    }
    // Get the required value for computerSelection for the player to win.
    winCondition = getWinCondition(playerSelection);

    // If the computer's choice matches the win condition, player wins.
    if (computerSelection == winCondition) {
        console.log("Player wins!");
        return 1;
    }
    // Otherwise, the player loses.
    else {
        console.log("Player loses!");
        return 0;
    }
}

function getWinCondition(playerSelection) {
    /**
     * Uses the playerSelection array index to determine the 
     * required computerSelection array index for the player 
     * to win.
     * 
     * Rock - 0
     * Paper - 1
     * Scissors - 2
     */
    switch (playerSelection) {
        case 0: 
            return 2; 
        case 1: 
            return 0; 
        case 2: 
            return 1;
    }
}

function getPlayerSelection () {
    /**
     * Prompts the user to enter rock, paper, or scissors and returns
     * the selection as the corresponding array index for gameSelections.
     * 
     * @return {number} - User's selection as array index.
     */

    let validSelection = false; // False unless the user chooses a valid selection
    let selectionID = -1; // Corresponding array index for user's selection.
    let playerSelection = prompt("Please enter rock, paper, or scissors"); // User input prompt.
    playerSelection = playerSelection.toLowerCase(); // Convert user input to lowercase for comparison

    // Compares user input to valid selections. Reprompts user for invalid selections.
    while (!validSelection) {
        if (playerSelection == "rock") {
            selectionID = 0;
            validSelection = true;
        }
        else if (playerSelection == "paper") {
            selectionID = 1;
            validSelection = true;
        }
        else if (playerSelection == "scissors") {
            selectionID = 2;
            validSelection = true;
        } 
        else {
            alert("Invalid selection. Please try again.");
            playerSelection = prompt("Please enter rock, paper, or scissors");
            playerSelection = playerSelection.toLowerCase();
        }
    }
    return selectionID;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for (let i = 0; i < 5; i++) {
        result = singleRound(getPlayerSelection(), computerPlay());
        if (result == 0) {
            computerScore++;
        }
        else if (result == 1) {
            playerScore++;
        }
        else if (result == 2) {
            computerScore++;
            playerScore++;
        }
        console.log(`
        Player Score: ${playerScore} Computer Score: ${computerScore}
        `);
    }

    console.log(`******************************`);
    console.log(` Final Score                `);
    console.log(` Player: ${playerScore}     `);
    console.log(` Computer: ${computerScore} `); 
    console.log(`******************************`);    
           
    if (playerScore > computerScore) {
        console.log(`\n***Player Wins!***`);
    }
    else {
        console.log(`\n***Player Loses!***`);
    }
}