'use strict';

// 10m 1s

// Write a function that accepts a string, and returns true if it is in the form of a phone number. 
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses) 

// Examples:

// validPhoneNumber("(123) 456-7890")  =>  returns true
// validPhoneNumber("(1111)555 2345")  => returns false
// validPhoneNumber("(098) 123 4567")  => returns false

function validPhoneNumber(phoneNumber){
  let regex = /\(\d{3}\)\s\d{3}-\d{4}/g;
  let num = phoneNumber.match(regex);
  return num === null ? false : phoneNumber === num[0] ? true : false;
}

console.log(validPhoneNumber('(123) 156-7890'), true);