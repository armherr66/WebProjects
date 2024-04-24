'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const backgroundColor = document.querySelector('body');
const secretNumberLabel = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const highScoreLabel = document.querySelector('.highscore');

const setText = function (text) {
    message.textContent = text;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(guessInput.value);
    if (!guess) { // No user input
        setText("⛔ No Number!");
    } else if (guess === secretNumber) { // Secret number found
        setText("🎉 Correct number!");
        backgroundColor.style.backgroundColor = '#60b347';
        secretNumberLabel.style.width = '30rem';
        secretNumberLabel.textContent = secretNumber;
        if (score > Number(highScoreLabel.textContent))
            highScoreLabel.textContent = score;
    } else { // User input different than secret number
        if (score > 1) { // Only keep hinting if the score is greater than 1
            setText(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
        } else { // Finish the game if the guess is wrong and user only had one more chance
            setText("💥 You lost the game!");
        }
        score--; // Decrease the score when the user input is different than the secret number
    }
    scoreLabel.textContent = score; // Update the score in the page
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumberLabel.textContent = "?";
    secretNumberLabel.style.width = "15rem";
    setText("Start guessing...");
    guessInput.value = "";
    backgroundColor.style.backgroundColor = "#222";
    score = 20;
    scoreLabel.textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});