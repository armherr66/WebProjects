'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const numberElement = document.querySelector('.number');

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there's no input
    if (!guess) {
        displayMessage('⛔️ No number!');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = "#60b347";
        numberElement.style.width = "30rem";
        numberElement.textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When player is wrong: Too high or too low
    } else {
        const message = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        if (score > 1) {
            displayMessage(message);
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('body').style.backgroundColor = "#222";
    numberElement.style.width = "15rem";
    numberElement.textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').focus();
});