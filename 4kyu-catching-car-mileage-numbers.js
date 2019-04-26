'use strict'; 

// Catching Car Mileage Numbers
// https://www.codewars.com/kata/catching-car-mileage-numbers/train/javascript

// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, 
// he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, 
// and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights 
// up yellow or green depending on whether it receives a 1 or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, 
// and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, 
// or a 0 if the number is not interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.

function isInteresting(number, awesomePhrases) {
  // if less than 98 automatically return 0;
  if (number < 98) {
    return 0;
  }
  // create counter for loop to track current or upcoming numbers
  let counter = 0;
  // create for loop to test current number + next two
  for (let i = 0; i < 3; i++) {
    let num = (number + i).toString().split('');
    let numLength = num.length;
    let firstDigit = num[0];
    let palindrome = true;
    let awesomePhrasesMatch = false;
    let incrementingSequence = false;
    let decrementSequence = false;

    // TEST 5: The digits are a palindrome: 1221 or 73837
    if (numLength < 3) {
      palindrome = false;
    }
    for (let i = 0; i < Math.floor(numLength / 2); i++) {
      if (parseInt(num[i]) !== parseInt(num[numLength - 1 - i] || numLength < 3)) {
        palindrome = false;
      }
    }
    // TEST 6: The digits match one of the values in the awesomePhrases array
    if (awesomePhrases.length !== 0) {
      for (let i = 0; i < awesomePhrases.length; i++) {
        if (number + counter === awesomePhrases[i]) {
          awesomePhrasesMatch = true;
        }
      }
    }
    // TEST 3: The digits are sequential, incementing†: 1234
    // TEST 4: The digits are sequential, decrementing‡: 4321
    // TEST 7: † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
    // TEST 8: ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
    let incSeqCount = 0;
    let decSeqCount = 0;
    if (number > 99) {
      for (let i = 0; i < numLength - 1; i++) {
        if (parseInt(num[i]) + 1 === parseInt(num[i + 1])) {
          // condition that makes sure 0 never comes before 1
          if (num[i] === '0' && num[i + 1] === '1') {
            incSeqCount--;
          } else {
            incSeqCount++;
          }
        } else if (parseInt(num[i]) - 1 === parseInt(num[i + 1])) {
          if (num[i] === '0' && num[i + 1] === '9') {
            decSeqCount--;
          } else {
            decSeqCount++;
          }
        } else {
          if (num[i] === '9' && num[i + 1] === '0') {
            incSeqCount++;
          } else if ((num[i] === '1' && num[i + 1] === '0')) {
            decSeqCount++;
          } else {
            incSeqCount--;
          }
        }
      }
      if (incSeqCount === numLength - 1) {
        incrementingSequence = true;
      }
      
      if (decSeqCount === numLength - 1) {
        decrementSequence = true;
      }
    }
    // TEST 1: Any digit followed by all zeros: 100, 90000
    if (num.filter(num => num !== '0').length === 1) {
      return counter === 0 ? 2 : 1;
      // TEST 2: Every digit is the same number: 1111
    } else if (number > 99 && num.filter(num => num === firstDigit).length === numLength) {
      return counter === 0 ? 2 : 1;
      // TEST 3, 4, 5, 6, 7, 8
    } else if (palindrome || awesomePhrasesMatch || incrementingSequence || decrementSequence) {
      return counter === 0 ? 2 : 1;
    } else { // If no tests pass increment counter and test next two numbers
      counter++;
    }
  }
  // If no tests pass for all 3 numbers return 0
  return 0;
}

// So, you should expect these inputs and outputs:

// my tests
console.log(isInteresting(99, [])); // 0

// // "boring" numbers
// console.log(isInteresting(3, [1337, 256]));    // 0
// console.log(isInteresting(3236, [1337, 256])); // 0

// // progress as we near an "interesting" number
// console.log(isInteresting(11207, [])); // 0
// console.log(isInteresting(11208, [])); // 0
// console.log(isInteresting(11209, [])); // 1
// console.log(isInteresting(11210, [])); // 1
// console.log(isInteresting(11211, [])); // 2

// // nearing a provided "awesome phrase"
// console.log(isInteresting(1335, [1337, 256])); // 1
// console.log(isInteresting(1336, [1337, 256])); // 1
// console.log(isInteresting(1337, [1337, 256])); // 2