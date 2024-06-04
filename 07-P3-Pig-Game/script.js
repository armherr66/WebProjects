'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore;
let activePlayer;
let playing;

const setStartingConditions = function () {
    score0El.textContent = "0";
    score1El.textContent = "0";
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.add('player--active');

    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;
}

const switchPlayer = function () {
    // Switch to next player
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    currentScore = 0;
}

// Starting conditions
const scores = [0, 0];
setStartingConditions();

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        console.log("Hola");
        // 1. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        console.log(dice);

        // 3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// Hold points functionality
btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to player global score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Switch to next player if global score is less than 100 or end game
        if (scores[activePlayer] < 100)
            switchPlayer();
        else {
            // End game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
    }
});

// Reset game functionality
btnNew.addEventListener('click', function () {
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    setStartingConditions();
});