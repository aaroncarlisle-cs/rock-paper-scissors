
const selections = ["Rock", "Paper", "Scissors"];
const lose = 0;
const win = 1;
const draw = 2;

const rock = document.getElementById("rock-button");
const paper = document.getElementById("paper-button");
const scissors = document.getElementById("scissors-button");
const buttons = [rock, paper, scissors];


let playerScore = 0;
let computerScore = 0;
let draws = 0;

scoreMessage = document.getElementById("score-message");
gameMessage = document.getElementById("game-message");

for (button of buttons) {
    button.addEventListener("mouseover", function (e) {
        this.style.borderColor = "#79B4B7";
        this.style.transform = "scale(1.1)"
    });
    button.addEventListener("mouseout", function (e) {
        this.style.borderColor = "#9D9D9D";
        this.style.transform = "scale(1)"
    });
    button.addEventListener("click", function () {
        if (this == rock) game("Rock");
        if (this == paper) game("Paper");
        if (this == scissors) game("Scissors");
    })
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
    updateIcons(playerSelection, computerSelection);
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

function game(selection) {
    let result = singleRound(selection, computerPlay());
    // Play i rounds of rock, paper, scissors and reports score.
        if (result == lose) {
            computerScore++;
            gameMessage.textContent = "Computer Wins";
        }
        else if (result == win) {
            playerScore++;
            gameMessage.textContent = "Player Wins";
        }
        else if (result == draw) {
            draws++;
            gameMessage.textContent = "Draw";
        }

        scoreMessage.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function updateIcons(player, computer) {
    const icons = document.getElementById("icons");
    icons.innerHTML = "";
    icons.innerHTML = getPlayerIcon(player) + getComputerIcon(computer);
}

function getPlayerIcon(player) {
    if (player == "Rock") {
        return '<i class="fa-10x fa-solid fa-hand-back-fist icon" data-fa-transform="rotate-90"></i>';
    }
    if (player == "Paper") {
        return '<i class="fa-10x fa-solid fa-hand icon" data-fa-transform="rotate-90"></i>';
    }
    if (player == "Scissors") {
        return '<i class="fa-10x fa-solid fa-hand-scissors icon" data-fa-transform="flip-h"></i>';
    }
    return;
}
function getComputerIcon(computer) {
    if (computer == "Rock") {
        return '<i class="fa-10x fa-solid fa-hand-fist icon" data-fa-transform="rotate-90 flip-h"></i>';
    }
    if (computer == "Paper") {
        return '<i class="fa-10x fa-regular fa-hand icon" data-fa-transform="rotate-90 flip-h"></i>';
    }
    if (computer == "Scissors") {
        return '<i class="fa-10x fa-solid fa-hand-peace icon" data-fa-transform="rotate-90 flip-h"></i>';
    }
    return;
}