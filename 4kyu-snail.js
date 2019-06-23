'use strict';

function snail(arr) {
  let low = 0;
  let high = arr.length - 1;
  let result = [];
  while(high - low > 2) {
    for (let i = 0; i <= high; i++) {
      result.push(arr[low][i]);
    }
    console.log('L11 result', result);

    for (let i = 1; i <= high; i++) {
      result.push(arr[i][high]);
    }
    console.log('L16', result);
    // increment low and decrement high
    low+=2;
    high-=2;
  }
}

let arr0 = [[1,2], [3,4]];
let arr1 = [[1,2,3], [4,5,6], [7,8,9]];
let arr2 = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20], [21,22,23,24,25], [26,27,28,29,30]];

snail(arr2);