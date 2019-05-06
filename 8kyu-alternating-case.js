'use strict';

// https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/train/javascript

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase 
// in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter 
// becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

String.prototype.toAlternatingCase = function () {
  let str = this;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toLowerCase()) {
      newStr += str.charAt(i).toUpperCase();
    } else {
      newStr += str.charAt(i).toLowerCase();
    }
  }
  return newStr;
};

console.log('hello world'.toAlternatingCase(), 'HELLO WORLD');
console.log('HELLO WORLD'.toAlternatingCase(), 'hello world');
console.log('hello WORLD'.toAlternatingCase(), 'HELLO world');
console.log('HeLLo WoRLD'.toAlternatingCase(), 'hEllO wOrld');
console.log('12345'.toAlternatingCase(), '12345');
console.log('1a2b3c4d5e'.toAlternatingCase(), '1A2B3C4D5E');
console.log('String.prototype.toAlternatingCase'.toAlternatingCase(), 'sTRING.PROTOTYPE.TOaLTERNATINGcASE');
console.log('Hello World'.toAlternatingCase().toAlternatingCase(), 'Hello World');