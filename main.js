import './style.css'
//create a number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// initialize score and highscore when reload page
let score = 20;
let highscore = 0;

// create function to display message
const messageDisplay = function (message) {
  document.querySelector('.message').textContent = message;
}
// create function to display score
const scoreDisplay = function (score) {
  document.querySelector('.score').textContent = score;
}
// create function to display number
const numberDisplay = function (number) {
  document.querySelector('.number').textContent = number;
}
// create function to display background color
const backgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
}
// create function to display number width
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
}

// add event listener to click button
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // when input is empty or greater than 20
  if (!guess || guess > 20) {
    messageDisplay('⛔️ Please input valid number');
  }
  // when the play is win, the guess is equal to number
  else if (secretNumber === guess) {
    messageDisplay('🎉 Correct Number !');
    backgroundColor('#60b347');
    numberWidth('30rem');
    numberDisplay(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when the guess is not equal to number
  else if (score > 1) {
    messageDisplay(guess < secretNumber ? 'Too low !' : 'Too high !')
    score--;
    scoreDisplay(score);
  }
  // when the play lose
  else {
    messageDisplay('😭 You lose the game');
    document.querySelector('body').style.backgroundColor = '#cf1322';
    scoreDisplay(0);
  }
})
// add event listener to play again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scoreDisplay(score);
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  numberDisplay('?');
  messageDisplay("Start guessing ...");
  document.querySelector('.guess').value = '';
  backgroundColor('#222');
  numberWidth('15rem');
})