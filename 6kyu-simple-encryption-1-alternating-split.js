'use strict';

// 56m 28s

// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, 
// and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

// This kata is part of the Simple Encryption Series:
// Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty

// Have fun coding it and please don't forget to vote and rank this kata! :-)

function encrypt(text, n) {
  if (text === null) {
    return null;
  }
  if (text === '') {
    return '';
  }
  if (n <= 0) {
    return text;
  }
  text = text.split('');
  for (let j = 0; j < n; j++) {
    let evenChar = [];
    let oddChar = [];
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        evenChar.push(text[i]);
      } else {
        oddChar.push(text[i]);
      }
    }
    text = oddChar.concat(evenChar);
  }
  return text.join('');
}

function decrypt(encryptedText, n) {
  if (encryptedText === null) {
    return null;
  }
  if (encryptedText === '') {
    return '';
  }
  if (n <= 0) {
    return encryptedText;
  }
  encryptedText = encryptedText.split('');
  for (let i = 0; i < n; i++) {
    let newArr = [];
    let evens = encryptedText.slice(Math.floor(encryptedText.length / 2));
    encryptedText.length = Math.floor(encryptedText.length / 2);
    let odds = encryptedText;
    for (let j = 0; j < evens.length; j++) {
      newArr.push(evens[j]);
      if (odds[j] !== undefined) {
        newArr.push(odds[j]);
      }
    }
    encryptedText = newArr;
  }
  return encryptedText.join('');
}

// Encrypt
console.log(encrypt('This is a test!', 0), 'This is a test!');
console.log(encrypt('This is a test!', 1), 'hsi  etTi sats!');
console.log(encrypt('This is a test!', 2), 's eT ashi tist!');
console.log(encrypt('This is a test!', 3), ' Tah itse sits!');
console.log(encrypt('This is a test!', 4), 'This is a test!');
console.log(encrypt('This is a test!', -1), 'This is a test!');
console.log(encrypt('This kata is very interesting!', 1), 'hskt svr neetn!Ti aai eyitrsig');

// Decrypt
console.log(decrypt('This is a test!', 0), 'This is a test!');
console.log(decrypt('hsi  etTi sats!', 1), 'This is a test!');
console.log(decrypt('s eT ashi tist!', 2), 'This is a test!');
console.log(decrypt(' Tah itse sits!', 3), 'This is a test!');
console.log(decrypt('This is a test!', 4), 'This is a test!');
console.log(decrypt('This is a test!', -1), 'This is a test!');
console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1), 'This kata is very interesting!');

// Solution
console.log(encrypt('', 0), '');
console.log(decrypt('', 0), '');
console.log(encrypt(null, 0), null);
console.log(decrypt(null, 0), null);