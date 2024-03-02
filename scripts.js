const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const randIdx = Math.floor(Math.random() * 3);
  return choices[randIdx]
}

function playRound(computerSelection, playerSelection){
  const lowerCasedSelection = playerSelection.toLowerCase();
  if(computerSelection === lowerCasedSelection){
    console.log("It's a tie!");
    return 0; 
  } else if(
    (computerSelection === "Rock" && lowerCasedSelection === "Scissors") ||
    (computerSelection === "Paper" && lowerCasedSelection === "Rock") ||
    (computerSelection === "Scissors" && lowerCasedSelection === "Paper")
  ){
    console.log(`You lose! ${toCapitalise(computerSelection)} beats ${toCapitalise(playerSelection)}`);
    return -1;
  } else {
    console.log(`You win! ${toCapitalise(playerSelection)} beats ${toCapitalise(computerSelection)}`);
    return 1;
  }
}

function playGame(){
  let result = 0;
  for(let i = 0; i < 5; i++){
    const userInput = prompt("Type in your choice (Rock, Paper or Scissors)", "Rock");
    const validData = validateInput(userInput);

    result += playRound(getComputerChoice(), validData)
  }
  if(result > 0){
    alert("You won the game!")
  } else if(result < 0){
    alert("You lost the game :(")
  } else {
    alert("The game resulted in a tie")
  }
}

function validateInput(toValidate){
  while(toValidate.toLowerCase() != "rock" && 
        toValidate.toLowerCase() != "paper" && 
        toValidate.toLowerCase() != "scissors"){
    toValidate = prompt("Invalid data, please try again", "Rock");
  }
  return toValidate;
}

function toCapitalise(str){
  const capitalisedStr = str[0].toUpperCase() + str.slice(1).toLowerCase()
  return capitalisedStr;
}