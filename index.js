//get user input 'rock, paper, scissors' / store answer in "const answer"

function getInput() {
    return prompt('Please select rock, paper, or scissors');
    
}
//storing userInput
const answer = getInput();
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
const computerAnswer = computerPlay()
console.log(computerAnswer);

//playing one round
function playRound(answer, computerAnswer) {
    if (answer === 'rock' && computerAnswer === 'scissors') {
        return ('You win!');
    } else if(answer === 'paper' && computerAnswer === 'rock') {
        return ('You win!');
    } else if (answer === 'scissors' && computerAnswer === 'paper') {
        return ('You win!');
    } else if (answer === computerAnswer) {
        return ('You tie!');
    } else {
        return ('You lose!');
    }
    
}


console.log (playRound(answer, computerAnswer));






