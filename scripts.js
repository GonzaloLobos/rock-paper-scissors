const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.round-result');
const displayedPlayerScore = document.querySelector('.player-score');
const displayedComputerScore = document.querySelector('.computer-score');
const currentScores = document.querySelector('.current-scores')

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const randIdx = Math.floor(Math.random() * 3);
  return choices[randIdx]
}

function playRound(computerSelection, playerSelection){
  if(computerSelection === playerSelection){
    roundResult.textContent = "It's a tie!";
  } else if(
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ){
    roundResult.textContent = `You lose! ${toCapitalise(computerSelection)} beats ${toCapitalise(playerSelection)}`
    computerScore++;
  } else {
    roundResult.textContent = `You win! ${toCapitalise(playerSelection)} beats ${toCapitalise(computerSelection)}`
    playerScore++;
  }
  displayedPlayerScore.textContent = playerScore;
  displayedComputerScore.textContent = computerScore;
  checkGameOver();
}

buttons.forEach((btn) => btn.addEventListener('click', function() {
  const parsedSelection = btn.textContent.toLowerCase();
  playRound(getComputerChoice(),parsedSelection)
}));

function toCapitalise(str){
  const capitalisedStr = str[0].toUpperCase() + str.slice(1).toLowerCase()
  return capitalisedStr;
}

function checkGameOver(){
  if(playerScore === 5){
    disableButtons();
    const finalResult = document.createElement('p');
    finalResult.textContent = "You won!";
    currentScores.appendChild(finalResult);
  } else if (computerScore === 5){
    disableButtons();
    const finalResult = document.createElement('p');
    finalResult.textContent = "You lose!";
    currentScores.appendChild(finalResult);
  }
}

function disableButtons(){
  buttons.forEach((btn) => btn.setAttribute("disabled", ""));
}