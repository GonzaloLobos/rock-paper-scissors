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

function playGame(){
  let result = 0;
  for(let i = 0; i < 5; i++){
    const userInput = prompt("Type in your choice (Rock, Paper or Scissors)", "Rock");
    const parsedInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
    
    result += playRound(getComputerChoice(), parsedInput)
  }
  if(result > 0){
    console.log("You won the game!")
  } else if(result < 0){
    console.log("You lost the game :(")
  } else {
    console.log("The game resulted in a tie")
  }
}