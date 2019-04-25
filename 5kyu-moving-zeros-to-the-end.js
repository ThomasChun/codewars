'use strict';

// Moving Zeros To The End
// https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  // filter array to get the count of 0's
  let zeroCount = arr.filter(num => num === 0).length;
  // console.log(zeroCount);
  // iterate through array and remove 0's with splice()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      // *Important: need to decrement i here because we removed an element out of the array
      // if we dont decrement i we will skip an index.
      // so if there are back to back 0's then that index will get skipped and will not be removed.
      i--;
    }
  }
  console.log('array w/o 0', arr);
  // now create a for loop that pushes 0's to the end of the array
  for (let i = 0; i < zeroCount; i++) {
    arr.push(0);
  }
  return arr;
};


// Alternative solutions by other users on Codewars

// Solution #1

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// filters and creates an array w/o 0's and then concats the array with 0's to the end of that array.
var moveZeros = function (arr) {
  return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
};

// Solution #2
// does the same as solution #1 but breaks it down into seperate lines of code.
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num) { return num !== 0; });
  var zeroList = arr.filter(function (num) { return num === 0; });
  return filtedList.concat(zeroList);
};

// Solution #3
// same as above solutions just different syntax.
var moveZeros = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
};

// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])); // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
// console.log(moveZeros(['false', true, false, '0', 'hi', 0, 1, 3, 0, 5]));
console.log(moveZeros(['a', 0, 0, 'b', 0, null, 0, 0, 'c', 0, 'd', 1, false, 0, 1, 3, 0, [], 0, 1, 9, {}, 9]))