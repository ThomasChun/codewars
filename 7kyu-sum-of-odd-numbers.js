'use strict';

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
  let rowFirstNum = 1;
  for (let i = 1; i < n; i++) {
    rowFirstNum = rowFirstNum + (2 * i);
  }
  let sum = rowFirstNum;
  for (let i = 1; i < n; i++) {
    sum += rowFirstNum + i * 2;
  }
  return sum;
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(3), 27);
console.log(rowSumOddNumbers(42), 74088);

// function rowSumOddNumbers(n) {
//   let totalNums = 0;
//   let sum = 0;
//   let numArr = [];
//   for (let i = 1; i <= n; i++) {
//     totalNums += i;
//   }
//   for (let i = 1; totalNums > 0; i += 2) {
//     numArr.unshift(i);
//     totalNums--;
//   }
//   for (let i = 0; i < n; i++) {
//     sum += numArr[i];
//   }
//   return sum;
// }