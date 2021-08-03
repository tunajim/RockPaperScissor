
let compMove = "";
let moves =  ['rock', 'paper', 'scissors'];

console.log(moves);

function computerPlay(){
    compMove = moves[Math.floor(Math.random()*moves.length)]

    if(compMove==='rock'){
        document.getElementById('computer').src="RockPaperScissors/rightRock.png";
    }else if(compMove==='paper'){
        document.getElementById('computer').src="RockPaperScissors/rightPaper.png";
    }else if(compMove==='scissors'){
        document.getElementById('computer').src="RockPaperScissors/rightScissors.png";
    }
}


computerPlay();




//write function that plays single round of rps, take two parameters, playerSelection and computerSelection
//prompt player to choose rock paper or scissors
//reprompt if user-input is not equal to rps
//make playerSelection parameter case-insensitive
//test to see if player won or lost
//store in result and return result
let result;
let resultMessage = document.querySelector("#resultMessage");
console.log(resultMessage);
resultMessage.innerHTML = "Press Button to Play!";

let userInput = '';

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let win = 'You Win!';
let lose = 'You Lose';
let draw = 'Its a Draw!';

function getInput(){
    rock.addEventListener("click", function(){userInput = 'rock';
        console.log(userInput);});
    paper.addEventListener("click", function(){userInput = 'paper';
        console.log(userInput)});
    scissors.addEventListener("click", function(){userInput = 'scissors';
        console.log(userInput);
    });
}

function displayWinner(){
    if(userInput === 'rock' && compMove === 'rock'){
        resultMessage.innerHTML = draw;
    }else if(userInput === 'rock' && compMove === 'paper'){
        resultMessage.innerHTML = lose;
    }else if(userInput === 'rock' && compMove === 'scissors'){
        resultMessage.innerHTML = win;
    }else if(userInput === 'paper' && compMove === 'paper'){
        resultMessage.innerHTML = draw;
    }else if(userInput === 'paper' && compMove === 'scissors'){
        resultMessage.innerHTML = lose;
    }else if(userInput === 'paper' && compMove === 'rock'){
        resultMessage.innerHTML = win;
    }else if(userInput === 'scissors' && compMove === 'scissors'){
        resultMessage.innerHTML = draw;
    }else if(userInput === 'scissors' && compMove === 'rock'){
        resultMessage.innerHTML = lose;
    }else if(userInput === 'scissors' && compMove === 'paper'){
        resultMessage.innerHTML = win;
    }
}

function updateSprites(){
    rock.addEventListener("click", function(){
        document.getElementById('player').src="RockPaperScissors/leftRock.png";
        computerPlay();
        displayWinner();
        addScore();
    });
    paper.addEventListener("click", function(){
        document.getElementById('player').src="RockPaperScissors/leftPaper.png";
        computerPlay();
        displayWinner();
        addScore();
    });
    scissors.addEventListener("click", function(){
        document.getElementById('player').src="RockPaperScissors/leftScissors.png";
        computerPlay();
        displayWinner();
        addScore();
    });
}

let plScore = 0;
let compScore = 0; 

function addScore() {
    if(resultMessage.innerHTML === win){
        plScore += 1;
        document.getElementById('playerScore').innerHTML = plScore;
        console.log(plScore);
    }else if(resultMessage.innerHTML === lose){
        compScore += 1;
        document.getElementById('compScore').innerHTML = compScore;
        console.log(compScore)
    }
}


function addCompScore(){
    compScore += 1;
}

function play (){
    getInput();
    updateSprites();
}

play();



/*function playRound(playerSelection, computerSelection){
    computerSelection = compMove;
    playerSelection = userInput;
    let winner;
   // userInput.toLowerCase();

    
    
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
*/

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

//game()


//playRound(playerSelection, computerSelection);