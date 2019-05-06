'use strict';

// https://www.codewars.com/kata/double-char/train/javascript

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "

function doubleChar(str) {
  return str.split('').map(character => character.repeat(2)).join('');
}


console.log(doubleChar('abcd'), 'aabbccdd');
console.log(doubleChar('Adidas'), 'AAddiiddaass');
console.log(doubleChar('1337'), '11333377');
console.log(doubleChar('illuminati'), 'iilllluummiinnaattii');
console.log(doubleChar('123456'), '112233445566');
console.log(doubleChar('%^&*('), '%%^^&&**((');
