'use strict';

// https://www.codewars.com/kata/categorize-new-member/train/javascript

function openOrSenior(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      data[i] = 'Senior';
    } else {
      data[i] = 'Open';
    }
  }
  return data;
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]), ['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open'])
