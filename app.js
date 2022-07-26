// -Player must guess a Number between min and max
// -Player gets certain amount og guesses
// -Notify how many guesses remaining
// -Notify the player the correct answer if loses
// -Let the player to choose to play again

let min = 1;
let max = 10;
let winningNum = getNumber();
let guessesLeft = 3;

const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('.guess-btn');
const message = document.querySelector('.message');
const container = document.querySelector('.container');

const playAgain = document.querySelector('.play-again');

minNum.textContent = min;
maxNum.textContent = max;

// Add Event Listener
guessBtn.addEventListener('click', guessNumberBetween);

playAgain.addEventListener('click',reloadApp);

function guessNumberBetween(e) {
   let guessInputVal = parseInt(guessInput.value);

    if(isNaN(guessInputVal) ||  guessInputVal < min || guessInputVal > 10) {
      setMessage(`Your Number must be between ${min} and ${max}`, '#ff3232');
    }

    if(guessInputVal === winningNum) {
      setMessage(`Correct! Winning Number is ${winningNum}. You Win!`, '#01bf52');
      guessBtn.style.display = 'none';
      playAgain.style.display = 'inline';
      guessInput.value = '';
      guessInput.disabled = true;
    } else {
      guessesLeft -= 1;
      setMessage(`Wrong Number! You Have ${guessesLeft} guesses left`, '#ff3232');

      if(guessesLeft === 0) {
        setMessage(`You have no more Guesses, You Lose!`, '#ff3232');
        guessBtn.style.display = 'none';
        playAgain.style.display = 'inline';
        guessInput.value = '';
        guessInput.disabled = true;
      }


    }

    
   e.preventDefault();
}

 function reloadApp() {
    window.location.reload();
 }

 function getNumber() {
  return Math.floor(Math.random() * (5+5) + 2 -1);
 }

function setMessage(msg,color) {
  message.style.color = color;
  message.textContent = msg;
  guessInput.style.borderColor = color;
}