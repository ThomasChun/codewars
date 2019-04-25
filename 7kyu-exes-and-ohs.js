'use strict';

// Exes and Ohs - 7 Kyu
// https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Test.assertEquals(XO('xo'),true);
// Test.assertEquals(XO("xxOo"),true);
// Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);

function XO(str) {
  // turn incoming string to lower case to address case insensitivity.
  str = str.toLowerCase();
  // create counters for x's and o's
  let xoCount = 0;
  // create for loop to iterate over each char in the string.
  for (let char of str) {
    // if the character is 'x' then increment the counter, decrement if it is 'o'
    if (char === 'x') {
      xoCount++;
    } else if (char === 'o') {
      xoCount--;
    }
  }
  // after iterating over the whole string. check to see if the xoCount is equal to zero.
  // if equal return true, else return false.
  return (xoCount === 0 ? true : false);
}



// Alternative answers from other users

// The match() method retrieves the result of matching a string against a regular expression.

function XO(str) {
  // matches the string against the regex that matches all x's in string and is case insensitive due to the 'i' flag added at the end.
  let x = str.match(/x/gi);
  // do the same for o as x above
  let o = str.match(/o/gi);
  // checks that x.length and o.length are equal and returns true or false.
  return (x && x.length) === (o && o.length);
}


// arrow function
const XO = str => {
  // turn string to lower case and split each individual character into an array.
  str = str.toLowerCase().split('');
  // filter 'x' out of str array and check that length against filter o out of str array.
  // will return boolean value.
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
};



// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
// The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for 
// each match. If pattern is a string, only the first occurrence will be replaced.
// The original string is left unchanged.

function XO(str) {
  // use the replace method and regex so that all occurences of x are replaced with '' effectively removing x's from the str
  // do the same for var b removing all occurences of o from the string using replace() and regex
  // /gi in the regex = 'g' for global and 'i' for case insensitive.
  var a = str.replace(/x/gi, ''),
    b = str.replace(/o/gi, '');
    // now compare the two strings with the x's and o's removed from the new strings. returns boolean value.
  return a.length === b.length;
}

console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('Oo'));
console.log(XO('ooom'));