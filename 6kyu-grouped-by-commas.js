'use strict';

// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 2147483647

// Examples
//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

function groupByCommas(n) {
  let result = [];
  n = String(n).split('').reverse();
  console.log(n);
  if (n.length > 3) {
    console.log('entered > 3');
    for (let i = 1; i < n.length + 1; i++) {
      if (i % 3 === 0) {
        console.log('enter comma');
        result.push(`${n[i]}`);
        console.log('result 27', result);
        if (n[i+1] !== null) {
          result.push(',');
          console.log('result 30', result);
        }
      } else {
        console.log('entered else statement');
        result.push(n[i]);
      }
    } 
  }
  console.log('result', result);
  return result.reverse().join('');
}

// console.log(groupByCommas(1), '1');
// console.log(groupByCommas(10), '10');
// console.log(groupByCommas(100), '100');
console.log(groupByCommas(1000), '1,000');
// console.log(groupByCommas(10000), '10,000');
// console.log(groupByCommas(100000), '100,000');
// console.log(groupByCommas(1000000), '1,000,000');
// console.log(groupByCommas(35235235), '35,235,235');