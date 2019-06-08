'use strict';

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
  let numArr = num.toString().split('');
  let expForm = [];
  while(numArr.length > 0) {
    if (numArr[0] !== '0') {
      let result = numArr[0] + '0'.repeat(numArr.length-1);
      numArr.shift();
      expForm.push(result);
    } else {
      numArr.shift();
    }
  }
  return expForm.join(' + ');
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');