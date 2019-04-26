'use strict'; 

// Rot13
// https://www.codewars.com/kata/rot13-1/train/javascript

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 
// letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers 
// or special characters included in the string, they should be returned as they are. Only letters from the 
// latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  // ascii A = 65 and Z = 90
  // ascii a = 97 and z = 122
  let rot13Str = '';
  let charCode;
  // iterate through the whole string
  for (let i = 0; i < message.length; i++) {
    charCode = message.charCodeAt(i);
    // If upper case 
    if (65 <= charCode && charCode <= 90) {
      // get current ascii of letter and +13. If > 90 - 26 to get the right ascii
      let newCode = message.charCodeAt(i) + 13;
      // make sure newCode doesn't exceed 90 if so -26
      if (newCode <= 90) {
        rot13Str += String.fromCharCode(newCode);
      } else {
        rot13Str += String.fromCharCode(newCode - 26);
      }
    } else if (97 <= charCode && charCode <= 122) {
      let newCode = message.charCodeAt(i) + 13;
      if (newCode <= 122) {
        rot13Str += String.fromCharCode(newCode);
      } else {
        rot13Str += String.fromCharCode(newCode - 26);
      }
    } else {
      // if the character is not a-z A-Z then just print out the character without shifting 13 letters.
      rot13Str += String.fromCharCode(message.charCodeAt(i));
    }
  }
  return rot13Str;
}

console.log('grfg', rot13('test'));
console.log('Grfg', rot13('Test'));


// Alternative solutions submitted by other users on codewars

// Solution #1
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

// Solution #2
const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));

// Solution #3
var codeA = 'A'.charCodeAt(0),
  codeZ = 'Z'.charCodeAt(0),
  codea = 'a'.charCodeAt(0),
  codez = 'z'.charCodeAt(0);
function rot13(message) {
  return message.split('').map(function (char) {
    var code = char.charCodeAt(0);
    if (codeA <= code && code <= codeZ) {
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if (codea <= code && code <= codez) {
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}