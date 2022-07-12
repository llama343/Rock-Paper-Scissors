//get user input 'rock, paper, scissors' / store answer in "const answer"

function getInput() {
    let answer = prompt('Please select rock, paper, or scissors');
    return answer;
}

const answer = getInput();




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

console.log(computerPlay());






