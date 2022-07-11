
//Get a random floating point value, return rock, paper, or scissors
function computerPlay() {
  let number = Math.random();
    if (number <= .333333) {
        return ('Rock!');
    } else if (number <= .66666) {
        return ('Paper!');
    } else  {
        return ('Scissors!');
    }   
    
}





//playing 1 round, displaying if win or lose
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Scissors!') {
        console.log('You win!');
    } else {
        console.log('You lose');
    }
    
}

const playerSelection ='rock';
const computerSelection = computerPlay();

console.log(playRound('rock', computerSelection));



