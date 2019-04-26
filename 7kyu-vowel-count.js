'use strict';

// Vowel Count
// https://www.codewars.com/kata/vowel-count/train/javascript

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  for (let char of str) {
    if (char.match(/[aeiou]/g)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCount('abracadabra'), '5');