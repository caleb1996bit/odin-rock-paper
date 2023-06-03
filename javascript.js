
//create choices Array
/*const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
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
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
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
} */



// Complete logic of game inside this function
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	// Function to
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${5-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver function after 5 moves
				if(moves == 5){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function to decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.player-count');
		const computerScoreBoard = document.querySelector('.computer-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'Player Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// Function to run when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Won The Game'
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Lost The Game';
			result.style.color = 'red';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}


	// Calling playGame function inside game
	playGame();
	
}

// Calling the game function
game();
