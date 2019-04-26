'use strict'; 

// Find the missing letter - 6 Kyu
// https://www.codewars.com/kata/find-the-missing-letter/train/javascript

// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array) {
  // turn array into string
  let str = array.join('');
  // for loop that iterates over string and compares charCodeAt(i)
  for (let i = 0; i < str.length; i++) {
    // check for the instance that the statement in if block is true.
    // it will be true when the expected letter is skipped.
    if (str.charCodeAt(0) + i !== str.charCodeAt(i)) {
      // since we skipped the expected letter, we need to subtract 1 from charCode
      // then return the letter at that charCode
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
}


// Alternative solutions by other users

// Solution #1
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}

// Solution #2
function findMissingLetter(array) {
  var i = array[0].charCodeAt();
  array.map(x => x.charCodeAt() == i ? i++ : i);
  return String.fromCharCode(i);
}

// Solution #3
function getExpectedNextLetter(currentLetter) {
  var currentCharCode = currentLetter.charCodeAt();
  return String.fromCharCode(currentCharCode + 1);
}

function findMissingLetter(letters) {
  for (var i = 0; i < letters.length; i++) {
    var expectedNextLetter = getExpectedNextLetter(letters[i]);
    var nextLetter = letters[i + 1];
    if (expectedNextLetter !== nextLetter) return expectedNextLetter;
  }
}

console.log('e ->', findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // 'e'
console.log('P ->', findMissingLetter(['O', 'Q', 'R', 'S'])); // 'P'