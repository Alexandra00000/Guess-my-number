'use strict';

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const numberDisplay = document.querySelector('.number');
const messageScore = document.querySelector('.message');
const scoreNumber = document.querySelector('.score');
const hightScoreNumber = document.querySelector('.highscore');
const userInput = document.querySelector('.guess');
const changeBackground = document.querySelector('body');



let randomNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let hightscore = 0;

const displayText = (block, text) => {
  block.textContent = text;
};



//adding the event for check button
checkBtn.addEventListener('click', () => {
  const guess = Number(userInput.value); 
  console.log(typeof guess);

  //when there is no input
  if (!guess) {
    displayText(messageScore, '❌ No number!');

    // when player wins
  } else if (guess === randomNumber) {
    displayText(messageScore, '🎉 You guess!');
    displayText(numberDisplay, randomNumber);
    changeBackground.style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';

    if (score > hightscore) {
      hightscore = score;
      displayText(hightScoreNumber, hightscore);
    }
    ///when the guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayText(
        messageScore,
        guess < randomNumber ? '📉 Too low!' : '📈 Too high!'
      );
      score--;
      displayText(scoreNumber, score);
    } else {
      displayText(messageScore, '💥 You lost the game!');
      scoreNumber.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  displayText(numberDisplay, '?');
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  numberDisplay.style.width = '15rem';
  changeBackground.style.backgroundColor = '#222';
  displayText(scoreNumber, 20);
  displayText(hightScoreNumber, hightscore);
  displayText(messageScore, 'Start guessing...');
  userInput.value = '';
});

