'use strict';

// 9m 59s

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
// All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function () {
  let str = this.split(' ');
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > 1) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
    } else {
      str[i] = str[i].charAt(0).toUpperCase();
    }
  }
  return str.join('');
};

console.log('test case'.camelCase(), 'TestCase');
console.log('camel case method'.camelCase(), 'CamelCaseMethod');
console.log('say hello '.camelCase(), 'SayHello');
console.log(' camel case word'.camelCase(), 'CamelCaseWord');
console.log(''.camelCase(), '');