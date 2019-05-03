'use strict';

// https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/javascript

// Sum all the numbers of the array (in F# and Haskell you get a list) except the 
// highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even 
// if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// If array is empty, null or None, or if only 1 Element exists, return 0.

function sumArray(array) {
  if (array === null || array === 'None' || array.length < 2) {
    return 0;
  }
  let sorted = array.sort((a,b) => a - b);
  return sorted.reduce((a,b) => a + b) - (sorted[0] + sorted[sorted.length -1]);
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]), 16);
console.log(sumArray([]), 0);
console.log(sumArray(null), 0);
console.log(sumArray('None'), 0);
console.log(sumArray([1]), 0);