'use strict';

// https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

//   Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
// you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let posCount = input.filter(num => num > 0).length;
  let negs = input.filter(num => num < 0)
  return negs.length === 0 ? [posCount, 0] : [posCount, negs.reduce((a, b) => a + b)];
}


let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let testData = null;
// let testData = [1,2,3];
console.log(countPositivesSumNegatives(testData), [10, -65]);

let testData1 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
console.log(countPositivesSumNegatives(testData1), [8, -50]);