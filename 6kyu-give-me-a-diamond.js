'use strict';

// 29m 17s

// This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend. She likes diamonds, 
// and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// ###Task:

// You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. 
// Please see provided test cases for exact output format.

// The shape that will be returned from print method resembles a diamond, where the number provided as input represents 
// the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than 
// the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and 
// bottom of the figure.

// Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).

// Please see provided test case(s) for examples.

// Python Note
// Since print is a reserved word in Python, Python students must implement the diamond(n) method instead, and 
// return None for invalid input.

// JS Note
// JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.

function diamond(n){
  if (n % 2 === 0 || n < 1) {
    return null;
  }
  let diamondArr = [];
  let subtractStars = 0;
  for (let i = n; i > 0; i -= 2) {
    let stars = n - subtractStars;
    diamondArr.push(' '.repeat(((n-i))/2) + '*'.repeat(stars) + '\n');
    subtractStars += 2;
  }
  let diamondReverseArr = diamondArr.slice();
  diamondReverseArr.reverse();
  diamondReverseArr.pop();
  return diamondReverseArr.concat(diamondArr).join('');
}

console.log(diamond(3), ' *\n***\n *\n');
console.log(diamond(2), null);
console.log(diamond(-3), null);
console.log(diamond(0), null);