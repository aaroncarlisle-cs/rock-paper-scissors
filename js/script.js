let gameChoices = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    // Randomly return either rock, paper, or scissors as strings 
    return Math.floor(Math.random()*gameChoices.length);
}
function singleRound(playerSelection, computerSelection) {
    // Strings to be returned, change to 
    let computerWinsMessage = `${gameChoices[computerSelection]} beats ${gameChoices[playerSelection]}. Computer wins!`;
    let playerWinsMessage = `${gameChoices[playerSelection]} beats ${gameChoices[computerSelection]}. Player wins!`;
}