
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


console.log(computerPlay());




