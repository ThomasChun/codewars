'use strict';

// 12m 34s

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  let currHighWord = '';
  let currHighScore = 0;
  x = x.split(' ');
  for (let i = 0; i < x.length; i++) {
    let wordScore = 0;
    for (let j = 0; j < x[i].length; j++) {
      wordScore += (x[i].charCodeAt(j) - 96);
    }
    if (wordScore > currHighScore) {
      currHighWord = x[i];
      currHighScore = wordScore;
    }
  }
  return currHighWord;
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');  