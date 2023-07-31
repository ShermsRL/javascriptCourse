'use strict';

// different ways to select element by ID
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const curr0Ele = document.getElementById('current--0');
const curr1Ele = document.getElementById('current--1');

const diceEle = document.querySelector('.dice');

// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// players
const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');

// starting conditions
let score, currentScore, activePlayer, playing;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  curr0Ele.textContent = 0;
  curr1Ele.textContent = 0;

  diceEle.classList.add('hidden');
  player0Ele.classList.remove('player--winner');
  player1Ele.classList.remove('player--winner');
  player0Ele.classList.add('player--active');
  player1Ele.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Ele.classList.toggle('player--active');
  player1Ele.classList.toggle('player--active');
};

init();

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEle.classList.remove('hidden');
    // manipulate the src attribute to change image
    diceEle.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;
      diceEle.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
