'use strict';

// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.message').textContent = 'Correct Number!👌';
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
//
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check')
    .addEventListener('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);

        // No input
        if (!guess) {
            displayMessage('No Number!👌');

            // Player wins
        } else if (guess === secretNumber) {
            displayMessage('Correct Number!👌');
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;

            }

        } else if (guess !== secretNumber) {
            if (score > 0) {
                displayMessage(guess > secretNumber ? '⚡ Too high!' : '🪫 Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('🔚 You lost the game!');

            }
        }
    });

document.querySelector('.again')
    .addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        displayMessage('Start guessing...');
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    })
