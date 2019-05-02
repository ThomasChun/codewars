'use strict';

// https://www.codewars.com/kata/opposite-number/train/javascript

// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return number > 0 ? number * (-1) : Math.abs(number);
}

console.log(opposite(1), -1);
console.log(opposite(-21), 21);