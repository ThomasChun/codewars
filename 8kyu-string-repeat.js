'use strict';

// https://www.codewars.com/kata/string-repeat/train/javascript

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, '*'), '***');
console.log(repeatStr(5, '#'), '#####');
console.log(repeatStr(2, 'ha '), 'ha ha ');
