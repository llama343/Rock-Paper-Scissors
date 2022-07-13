let draws = 0;
let playerScore = 0;
let computerScore = 0;
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"


function playerChoice() {
   return prompt('Please chose rock, paper, or scissors').toLowerCase();
}
let answer = playerChoice();
console.log(answer);




//Get a random floating point value, return rock, paper, or scissors
function computerPlay() {
  let number = Math.random();
    if (number <= .333333) {
        return ('rock');
    } else if (number <= .66666) {
        return ('paper');
    } else  {
        return ('scissors');
    }   
    
}
//storing computerPlay
let computerAnswer = computerPlay();
console.log(computerAnswer);


//playing one round
function playRound(answer, computerAnswer) {
    if (answer === 'rock' && computerAnswer === 'scissors') {
        return playerWinRound;
    } else if(answer === 'paper' && computerAnswer === 'rock') {
        return playerWinRound;
    } else if (answer === 'scissors' && computerAnswer === 'paper') {
        return playerWinRound;
    } else if (answer === computerAnswer) {
        return draw;
    } else {
        return computerWinRound;
    }
    
}
//storing result of 1 round
let roundResult = playRound(answer, computerAnswer);
console.log(roundResult);

console.log ('Your score is ' + playerScore);
console.log('The computer score is ' + computerScore);



//for loop plays mutliple rounds
for (let i = 0; i < 1000; i++) {
    let answer = playerChoice();
    console.log(answer);
    let computerAnswer = computerPlay();
    console.log(computerAnswer);
    let roundResult = playRound(answer, computerAnswer);
    console.log(roundResult);
    gameScore(roundResult);
    console.log ('Your score is ' + playerScore);
    console.log('The computer score is ' + computerScore);

    if (playerScore === 5 || computerScore === 5) {
        break;
    }

     
}

//adds points
function gameScore(roundResult) {
    if (roundResult === playerWinRound) {
        playerScore++;
    } else if (roundResult === draw) {
        draws++;
    } else {
        computerScore++;
    }
//stops game if score is reached
    if (playerScore === 5) {
        console.log(playerWin);
        return;
    }

    if (computerScore === 5) {
        console.log(computerWin);
        return;
    }
}