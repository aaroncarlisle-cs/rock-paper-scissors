const selections = ["Rock", "Paper", "Scissors"];
const lose = 0;
const win = 1;
const draw = 2;

const rock = document.getElementById("rock-button");
const paper = document.getElementById("paper-button");
const scissors = document.getElementById("scissors-button");
const buttons = [rock, paper, scissors];

for (button of buttons) {
    button.addEventListener("mouseover", function (e) {
        this.style.borderColor = "#79B4B7";
        this.style.transform = "scale(1.1)"
    });
    button.addEventListener("mouseout", function (e) {
        this.style.borderColor = "#9D9D9D";
        this.style.transform = "scale(1)"
    });
}


function getPlayerSelection (selection) {
    playerSelection = selection;
    return playerSelection;
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