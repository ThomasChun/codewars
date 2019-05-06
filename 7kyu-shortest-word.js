'use strict';

// https://www.codewars.com/kata/shortest-word/train/javascript

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {  
  let words = s.split(' ');
  let shortestWordLength = words[0].length;
  for (let word of words) {
    if (word.length < shortestWordLength) {
      shortestWordLength = word.length;
    }
  }
  return shortestWordLength;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'), 3);
console.log(findShort('turns out random test cases are easier than writing out basic ones'), 3); 