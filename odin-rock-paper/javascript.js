console.log("Hello,World!") 

//create choices Array
const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {ss
   for (let i = 1; i <= 5; i++){
      playRound(i)
   }
   document.querySelector("button").textContent = "Play new game";
   logWins();
}

function playRound(round) {
   const playerSelection = getPlayerSelection();
   const computerSelection = getComputerSelection();
   const winner = checkWinner(playerSelection, computerSelection);
   winners.push(winner);
   logRound(playerSelection, computerSelection, winner, round);
}

//Function get computer choice 
//Computer can choose between rock, paper and scissors and randomly returns these values as a string

function getComputerSelection(){
   return randomNumber = choices[Math.floor(Math.random()*choices.length)];
}

//Playerselection with prompt and validation 
function getPlayerSelection(){
   let playerChoice = prompt("Type rock, paper or scissors");
   while (playerChoice == null){
      playerChoice = prompt("Type rock, paper or scissors");
      
   }
   playerChoice = playerChoice.toLowerCase();
   let choiceValidation = validateInput(playerChoice);
   while (choiceValidation == false){
      playerChoice = prompt(
         "Spelling needs to be precise, type in rock, paper or scissors, capitilization does not matter"
      );
      while (playerChoice == null){
         playerChoice = prompt("Type rock, paper or scissors");
         
      }  
      playerChoice = playerChoice.toLowerCase();
      choiceValidation = validateInput(playerChoice); 
   }
   return playerChoice;
}
//Validate if player enters a valid string rock, paper or scissors
function validateInput(choice){
   return choices.includes(choice)
}

//Function to check who won the round 
function checkWinner(choiceP, choiceC){
   if(choiceP == choiceC){
      return "Nobody";   
   }else if (
      (choiceP === "rock" && choiceC === "scissors") || 
      (choiceP === "paper" && choiceC === "rock") || 
      (choiceP === "scissors" && choiceC === "paper") 
      ){
      return "Player"
   }else {
      return "Computer"
   }
}

function logWins(){
   let playerWins = winners.filter((item) => item == "Player").length;
   let computerWins = winners.filter((item) => item == "Computer").length;
   let draws = winners.filter((item) => item == "Nobody").length;
   console.log("Result after 5 rounds:");
   console.log("Player Wins:", playerWins);
   console.log("Computer Wins", computerWins);
   console.log("Draws", draws);
}

function logRound(playerSelection, computerSelection, winner, round){
   console.log("round", round);
   console.log("Player chose",playerSelection);
   console.log("Computer chose", computerSelection);
   console.log(winner, "won the round")
   console.log("----------------------------------");
}

  
 


      
        
      

      
