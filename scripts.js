const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
  const randIdx = Math.floor(Math.random() * 3);
  return choices[randIdx]
}

function playRound(computerSelection, playerSelection){
  if(computerSelection === playerSelection){
    console.log("It's a tie!");
    return 0; 
  } else if(
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ){
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return -1;
  } else {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  }
}