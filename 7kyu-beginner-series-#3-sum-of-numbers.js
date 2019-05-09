'use strict';
//https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/train/javascript

// Given two integers a and b, which can be positive or negative, 
// find the sum of all the numbers between including them too and return it.
// If the two numbers are equal return a or b.

//   Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum(a, b) {
  if (a === b) {
    return a;
  } else {
    let difference = Math.abs(a - b);
    let sum = 0;
    let smallerNum = a < b ? a : b;
    for (let i = 0; i < difference + 1; i++) {
      sum += (smallerNum+i);
    }
    return sum;
  }
}

console.log(GetSum(5, -1), 14);
console.log(GetSum(505, 4), 127759);