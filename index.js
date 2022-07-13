//get user input 'rock, paper, scissors' / store answer in "const answer"

function getInput() {
    return prompt('Please select rock, paper, or scissors').toLowerCase();
    
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
        return ('You win! Rock beats scissors');
    } else if(answer === 'paper' && computerAnswer === 'rock') {
        return ('You win! Paper beats rock');
    } else if (answer === 'scissors' && computerAnswer === 'paper') {
        return ('You win! Scissors beats paper');
    } else if (answer === computerAnswer) {
        return ('You tie! You chose the same thing!!');
    } else {
        return ('You lose! Try again');
    }
    
}

const oneRound = playRound(answer, computerAnswer);
console.log (playRound(answer, computerAnswer));






