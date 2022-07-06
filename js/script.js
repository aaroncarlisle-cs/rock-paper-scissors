const rock = document.getElementById("rock-button");
const paper = document.getElementById("paper-button");
const scissors = document.getElementById("scissors-button");
const buttons = [rock, paper, scissors];
for (button of buttons) {
    button.addEventListener("mouseover", function (e) {
        this.style.borderColor = "#79B4B7";
    });
    button.addEventListener("mouseout", function (e) {
        this.style.borderColor = "#9D9D9D";
    });
    button.addEventListener("click", function () {
        if (playerScore == 5 || computerScore == 5) checkWin();
        else if (this == rock) game(rock);
        else if (this == paper) game(paper);
        else if (this == scissors) game(scissors);
    })
}

let playerScore = 0;
let computerScore = 0;
let draws = 0;
const scoreMessage = document.getElementById("score-message");
const gameMessage = document.getElementById("game-message");

const modal = document.querySelector('.modal');
modal.addEventListener('click', () => modal.style.display = 'none');
const modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
    resetGame();
});

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
    if (playerScore == 5 || computerScore == 5) checkWin();
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
    playerIcon.style.color = '#79B4B7';
    computerIcon.style.color = '#EB6073';
    if (result == win) { 
        playerIcon.classList.add('winner', 'fa-beat');
        computerIcon.classList.add('loser', 'fa-fade');
    }
    else if (result == lose) {
        playerIcon.classList.add('loser', 'fa-fade');
        computerIcon.classList.add('winner', 'fa-beat');
    }
    else {
        playerIcon.classList.add('draw', 'fa-beat-fade');
        computerIcon.classList.add('draw', 'fa-beat-fade');
    }
    icons.appendChild(playerIcon);
    icons.appendChild(computerIcon);
}

function getPlayerIcon(selection) {
    let playerIcon = document.createElement('i');
    playerIcon.classList.add('icon', 'fa-7x', 'fa-solid');
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
    computerIcon.classList.add('icon', 'fa-7x');
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
function checkWin() {
    let winner = document.querySelector('.winner-name');
    if (playerScore == 5) {
        winner.textContent = "Player";
        winner.style.color = "#79B4B7";
    }
    else if (computerScore == 5) {
        winner.textContent = "Computer";
        winner.style.color = "#EB6073";
    }
    modal.style.display = 'block';
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    draws = 0;
    scoreMessage.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    gameMessage.textContent = 'First to 5 Points Wins';
    icons.innerHTML = '<i class="fa-7x fa-solid fa-question icon fa-beat-fade" style="--fa-beat-fade-opacity: 0.8; --fa-beat-fade-scale: 1.01;"></i><i class="fa-7x fa-solid fa-question icon fa-beat-fade" style="--fa-beat-fade-opacity: 0.8; --fa-beat-fade-scale: 1.01;"></i>';
}