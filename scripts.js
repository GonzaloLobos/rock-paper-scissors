const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.round-result');

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const randIdx = Math.floor(Math.random() * 3);
  return choices[randIdx]
}

function playRound(computerSelection, playerSelection){
  if(computerSelection === playerSelection){
    roundResult.textContent = "It's a tie!";
    return 0; 
  } else if(
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ){
    roundResult.textContent = `You lose! ${toCapitalise(computerSelection)} beats ${toCapitalise(playerSelection)}`
    return -1;
  } else {
    roundResult.textContent = `You win! ${toCapitalise(playerSelection)} beats ${toCapitalise(computerSelection)}`
    return 1;
  }
}

buttons.forEach((btn) => btn.addEventListener('click', function() {
  const parsedSelection = btn.textContent.toLowerCase();
  playRound(getComputerChoice(),parsedSelection)
}));

// function playGame(){
//   let result = 0;
//   for(let i = 0; i < 5; i++){
//     const userInput = prompt("Type in your choice (Rock, Paper or Scissors)", "Rock");
//     const validData = validateInput(userInput);

//     result += playRound(getComputerChoice(), validData)
//   }
//   if(result > 0){
//     alert("You won the game!")
//   } else if(result < 0){
//     alert("You lost the game :(")
//   } else {
//     alert("The game resulted in a tie")
//   }
// }

function toCapitalise(str){
  const capitalisedStr = str[0].toUpperCase() + str.slice(1).toLowerCase()
  return capitalisedStr;
}