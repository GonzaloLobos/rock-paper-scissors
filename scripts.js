// console.log("I am working!");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const randIdx = Math.floor(Math.random() * 3);
  return choices[randIdx]
}