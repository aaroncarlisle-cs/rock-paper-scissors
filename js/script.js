let gameSelections = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    // Randomly return either rock, paper, or scissors as id for gameSelections array
    // return Math.floor(Math.random()*gameSelections.length);
    return 0;
}

function singleRound(playerSelection, computerSelection) {
    // Function returns 0 for loss, 1 for win, and 2 for tie.

    // User input feedback
    console.log(`Player chooses ${gameSelections[playerSelection]}`);
    console.log(`Computer chooses ${gameSelections[computerSelection]}`);

    // Check for tie.
    if (playerSelection == computerSelection) {
        console.log("Tie game!");
        return 2;
    }
    // Get the necessary computer selection for the player to win
    winCondition = getWinCondition(playerSelection);

    // If the computer's choice matches the win condition, player wins.
    if (computerSelection == winCondition) {
        console.log("Player wins!");
        return 1;
    }
    // Otherwise, player loses.
    else {
        console.log("Player loses!");
        return 0;
    }
}

function getWinCondition(playerSelection) {
    // Set win conditions based on player's choice.
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
    let playerSelection = prompt("Please enter rock, paper, or scissors");
    playerSelection = playerSelection.toLowerCase();
    let validSelection = false;
    let selectionID = -1;
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