'use strict';

// 1h 15m 49s

// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as [[]]

let snail = function (array) {
  if (array.length <= 1) {
    return array[0];
  }
  let result = [];
  let low = 0;
  let high = array.length - 1;

  while (high - low > 0) {
    for (let i = low; i <= high; i++) {
      result.push(array[low][i]);
    }

    for (let i = low + 1; i <= high; i++) {
      result.push(array[i][high]);
    }

    for (let i = high - 1; i >= low; i--) {
      result.push(array[high][i]);
    }

    if (high - low > 2) {
      for (let i = high - 1; i >= low + 1; i--) {
        result.push(array[i][low]);
      }
    } else {
      if (array.length % 2 !== 0) { // if array.length is odd
        result.push(array[high - 1][low]);
        result.push(array[high - 1][high - 1]);
      }
    }
    low++;
    high--;
  }
  return result;
};

console.log(snail([[]]), []);
console.log(snail([[1]]), [1]);
console.log(snail([[1,2], [3,4]]), [1,2,4,3]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]));
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);