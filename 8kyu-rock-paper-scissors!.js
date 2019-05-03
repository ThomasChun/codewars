'use strict';

// https://www.codewars.com/kata/rock-paper-scissors/train/javascript

// Instructions
// Output
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  switch (p1) {
  case 'scissors':
    return p2 === 'paper' ? 'Player 1 won!' : p2 === 'rock' ? 'Player 2 won!' : 'Draw!';
  case 'paper':
    return p2 === 'rock' ? 'Player 1 won!' : p2 === 'scissors' ? 'Player 2 won!' : 'Draw!';
  case 'rock':
    return p2 === 'scissors' ? 'Player 1 won!' : p2 === 'paper' ? 'Player 2 won!' : 'Draw!';
  default:
    return 'Please choose rock, paper, or scissors.';
  }
};


const getMsg = (n) => `Player ${n} won!`;

console.log(rps('rock', 'scissors'), getMsg(1));
console.log(rps('scissors', 'paper'), getMsg(1));
console.log(rps('paper', 'rock'), getMsg(1));

console.log(rps('scissors', 'rock'), getMsg(2));
console.log(rps('paper', 'scissors'), getMsg(2));
console.log(rps('rock', 'paper'), getMsg(2));

console.log(rps('rock', 'rock'), 'Draw!');
console.log(rps('scissors', 'scissors'), 'Draw!');
console.log(rps('paper', 'paper'), 'Draw!');
