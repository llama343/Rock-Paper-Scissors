
const buttons = document.querySelectorAll('input')
const resetBtn = document.querySelector('#reset');


resetBtn.addEventListener('click',() => location.reload());





//original java

let playerScore = 0;
let computerScore = 0;




 





//Get a random computer choice
function computerPlay() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}





//playing one round
function playRound(playerSelection) {

    let computerSelection = computerPlay()
    let result = ''

    if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            playerScore += 1
            result = (' You win! ' + playerSelection + ' beats ' + computerSelection
                + '<br><br>Player score: ' + playerScore + '<br>Computer Score: ' + computerScore)

                if (playerScore === 5) {
                    result += '<br><br>You won the game!'
                }   
        } else if (playerSelection == computerSelection) {
            result = ('it\'s a tie. You both chose ' + playerSelection
            + '<br><br>Player score: ' + playerScore + '<br>Computer Score: ' + computerScore)
        } else {
            computerScore += 1
            result = (' You lose! ' + computerSelection + ' beats ' + playerSelection
            + '<br><br>Player score: ' + playerScore + '<br>Computer Score: ' + computerScore)

            if (computerScore == 5) {
                result += 'I won the game!'
            }
        }
        document.getElementById('result').innerHTML = result 
        return
    
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
    })
})
