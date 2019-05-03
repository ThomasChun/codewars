'use strict';

// https://www.codewars.com/kata/grasshopper-summation/train/javascript

// Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
  let sum = 0;
  while (num > 0) {
    sum += num;
    num--;
  }
  return sum;
};

console.log(summation(1), 1);
console.log(summation(8), 36);