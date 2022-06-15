let gameSelections = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    // Randomly return either rock, paper, or scissors as id for gameSelections array
    return Math.floor(Math.random()*gameSelections.length);
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
    for (let i = 0; i < 5; i++) {
        let result = singleRound(getPlayerSelection(), computerPlay());

    }
}