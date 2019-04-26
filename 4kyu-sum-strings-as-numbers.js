'use strict';

// Sum String as Numbers
// https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  let num = 1n;
  if (a === '') {
    a = '0';
  }
  if (b === '') {
    b = '0';
  }
  a = parseInt(a);
  b = parseInt(b);
  const sum = BigInt(a+b);
  return sum.toString();
}

console.log(sumStrings('', '5')); // 5
console.log(sumStrings('123','456')); //'579'
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')); // 712577413488402631964821329