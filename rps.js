

//playing against computer
//have the computer randomly return ;rock' 'paper' or 'scissors'
//need variable to hold random value

let compMove = "";
let moves =  ['rock', 'paper', 'scissors'];

console.log(moves);

function computerPlay(){
    compMove = moves[Math.floor(Math.random()*moves.length)]
}

computerPlay()

//write function that plays single round of rps, take two parameters, playerSelection and computerSelection
//prompt player to choose rock paper or scissors
//reprompt if user-input is not equal to rps
//make playerSelection parameter case-insensitive
//test to see if player won or lost
//store in result and return result
let result;

function playRound(playerSelection, computerSelection){
    computerSelection = compMove;
    let winner;
    let userInput = prompt('Please enter Rock, Paper, or Scissors');
   // userInput.toLowerCase();
    userInput.toString();
    playerSelection = userInput.toLowerCase(); 
    
   
    
    if(playerSelection === 'rock' && compMove === 'paper'){
        result = 'You Lose! Paper beats Rock.';
    }else if (playerSelection === 'rock' && compMove === 'scissors'){
        result = 'You Win! Rock beats Scissors.';
    }else if (playerSelection === 'paper' && compMove === 'scissors' ){
        result = 'You Lose! Scissors beats Paper';
    }else if (playerSelection === 'paper' && compMove === 'rock'){
        result = 'You Win! Paper beats Rock.';
    }else if(playerSelection === 'scissors' && compMove === 'rock'){
        result = 'You Lose! Rock beats Paper.';
    }else if(playerSelection === 'scissors' && compMove === 'paper'){
        result = 'You Win! Scissors beats Paper';
    }else if(playerSelection === compMove){
        result = "Its a Draw!";
    }else {
        playRound(playerSelection, computerSelection);
    }
    return alert(result);
}

//create function that iterates the game 5 times
//make computer play each time
//call playround function each time
//display result in console
function game(){
    for(let i=0;i<5;i++){
        computerPlay();
        playRound();
        console.log(result);
    }
    alert('Thanks for playing!');
}

game()


playRound()