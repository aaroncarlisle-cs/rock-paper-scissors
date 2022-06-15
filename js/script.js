let gameChoices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    // Randomly return either rock, paper, or scissors as strings 
    return Math.floor(Math.random()*gameChoices.length);
}

function singleRound(playerSelection, computerSelection) {
    // Function returns 0 for loss, 1 for win, and 2 for tie.

    // Check for tie.
    if (playerSelection == computerSelection) {
        return 2;
    }
    // Get the necessary computer selection for the player to win
    winCondition = getWinCondition(playerSelection);

    // If the computer's choice matches the win condition, player wins.
    if (computerSelection == winCondition) {
        return 1;
    }
    // Otherwise, player loses.
    else {
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