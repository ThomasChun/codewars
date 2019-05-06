'use strict';

// https://www.codewars.com/kata/fake-binary/train/javascript

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  x = x.split('');
  for (let i = 0; i < x.length; i++) {
    parseInt(x[i]) < 5 ? x[i] = 0 : x[i] = 1; 
  }
  return x.join('');
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 