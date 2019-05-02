'use strict';

// Persistent Bugger.
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  let count = 0;
  if (num < 10) {
    return count;
  } 
  
  while (num > 9) {
    count++;
    num = persist(num);
  }
  return count;
}

function persist(num) {
  let numb = 1;
  let numArr = num.toString().split('');
  for (let i = 0; i < numArr.length; i++) {
    numb *= parseInt(numArr[i]);
  }
  return numb;
}

console.log(persistence(39), '3');
console.log(persistence(4), '0');
console.log(persistence(25), '2');
console.log(persistence(999), '4');