'use strict';

// Next bigger number with the same digits
// https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript

// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// WORK IN PROGRESS
function nextBigger(n){
  // if numbers are in decrementing order it will return -1
  // approach problem from last digit an work back? 
  let digits = n.toString().split('');
  console.log(digits);
  for (let i = 0; i < digits.length; i++) {
    let largerDigits = digits.filter(num => num > digits[i]);
    if (largerDigits.length === 0) {
      console.log(digits[i]);
    }
    console.log(largerDigits);
  }
  return n;
}

// console.log(nextBigger(12),'21'); // 21
console.log(nextBigger(513),'531'); // 531
// console.log(nextBigger(2017),'2071'); // 2071
// console.log(nextBigger(414),'441'); // 441
// console.log(nextBigger(144),'414'); // 414