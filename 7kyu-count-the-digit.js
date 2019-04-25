'use strict';

// Count the Digit - 7 Kyu
// https://www.codewars.com/kata/count-the-digit/train/javascript

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. 
// Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) 
// the function taking n and d as parameters and returning this count.

// #Examples:

// n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1):
// the numbers of interest are
// 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
// so there are 11 digits `1` for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  // create for loop to square all numbers between 0 and n
  let squaredArr = [];
  for (let i = 0; i <= n; i++) {
    // push squared #'s to new array
    squaredArr.push(i * i);
  }
  // use array.join() to create a string of all the numbers
  let splitArr = squaredArr.join('');
  // split the string back into an array where each digit is at it's own index
  splitArr = splitArr.split('');
  // filter out d and the return the length of that returned array.
  return splitArr.filter(digit => parseInt(digit) === d).length;
}


// Alternative solutions by other users

function nbDig(n, d) {
  var res = 0;
  for (var g = 0; g <= n; g++) {
    var square = (g * g + "").split("");
    square.forEach((s) => s == d ? res++ : null)
  } return res;
}


const nbDig = (n, d) => {
  let re = new RegExp(d, 'g');
  return Array(...Array(n + 1))
    .reduce((s, v, i) => s + ((i * i + '').match(re) || []).length, 0);
}


function nbDig(n, d) {
  var o = '';
  for (var i = 0; i <= n; i++) {
    o += Math.pow(i, 2);
  }
  return o.split(d).length - 1
}

console.log('4700 ->', nbDig(5750, 0)); // 4700
console.log('9481 ->', nbDig(11011, 2)); // 9481
console.log('7733 ->', nbDig(12224, 8)); // 7733
console.log('11905 ->', nbDig(11549, 1)); // 11905