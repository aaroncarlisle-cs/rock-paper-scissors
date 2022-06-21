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
    button.addEventListener("click", function () {
        if (this == rock) game(rock);
        if (this == paper) game(paper);
        if (this == scissors) game(scissors);
    })
}

const lose = 0;
const win = 1;
const draw = 2;


function game(selection) {
    let computerSelection = computerPlay();
    let result = singleRound(selection, computerSelection);
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
        updateIcons(selection, computerSelection, result);
}

function computerPlay() {
    let rand = Math.floor(Math.random()*buttons.length);
    let computerSelection = buttons[rand];
    console.log(`Computer chooses ${computerSelection.getAttribute('id')}`);
    return computerSelection;
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return draw;
    // If not draw, figure out winning combination.
    winCondition = getWinCondition(playerSelection);
    if (computerSelection == winCondition) return win;
    else return lose;
}

function getWinCondition(playerSelection) {
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

function updateIcons(selection, computerSelection, result) {
    const icons = document.getElementById("icons");
    icons.innerHTML = "";
    let playerIcon = getPlayerIcon(selection);
    let computerIcon = getComputerIcon(computerSelection);
    if (result == win) { 
        playerIcon.classList.add('winner', 'fa-beat');
        playerIcon.style.color = '#79B4B7';
        computerIcon.classList.add('loser', 'fa-fade');
        computerIcon.style.color = '#EB6073';
    }
    else if (result == lose) {
        playerIcon.classList.add('loser', 'fa-fade');
        playerIcon.style.color = '#EB6073';
        computerIcon.classList.add('winner', 'fa-beat');
        computerIcon.style.color = '#79B4B7';
    }
    else {
        playerIcon.classList.add('draw', 'fa-bounce');
        computerIcon.classList.add('draw', 'fa-bounce');
    }
    icons.appendChild(playerIcon);
    icons.appendChild(computerIcon);
}

function getPlayerIcon(selection) {
    let playerIcon = document.createElement('i');
    playerIcon.classList.add('icon', 'fa-10x', 'fa-solid');
    if (selection == rock) {
        playerIcon.classList.add('fa-hand-back-fist');
        playerIcon.setAttribute('data-fa-transform', 'rotate-90');
        return playerIcon;
    }
    if (selection == paper) {
        playerIcon.classList.add('fa-hand');
        playerIcon.setAttribute('data-fa-transform', 'rotate-90');
        return playerIcon;
    }
    if (selection == scissors) {
        playerIcon.classList.add('fa-hand-scissors');
        playerIcon.setAttribute('data-fa-transform', 'flip-h');
        return playerIcon;
    }
    return;
}
function getComputerIcon(computer) {
    let computerIcon = document.createElement('i');
    computerIcon.classList.add('icon', 'fa-10x');
    computerIcon.setAttribute('data-fa-transform', 'rotate-90 flip-h');
    if (computer == rock) {
        computerIcon.classList.add('fa-solid', 'fa-hand-fist');
        return computerIcon;
    }
    if (computer == paper) {
        computerIcon.classList.add('fa-regular', 'fa-hand');
        return computerIcon;
    }
    if (computer == scissors) {
        computerIcon.classList.add('fa-solid', 'fa-hand-peace');
        return computerIcon;
    }
    return;
}

let playerScore = 0;
let computerScore = 0;
let draws = 0;

scoreMessage = document.getElementById("score-message");
gameMessage = document.getElementById("game-message");