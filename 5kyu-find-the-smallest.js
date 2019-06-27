'use strict';

// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index 
//  of a digit in the number, remove this digit at that index and insert it back to another or at the same 
//  place in the number in order to find the smallest number you can get.

// #Task: Return an array or a tuple or a string depending on the language (see "Sample Tests") with

// 1) the smallest number you got
// 2) the index i of the digit d you took, i as small as possible
// 3) the index j (as small as possible) where you insert this digit d to have the smallest number.
// Example:

// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

// smallest(209917) --> [29917, 0, 1] or ...

// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which 
// gave 029917 which is the number 29917.

// smallest(1000000) --> [1, 0, 6] or ...
// Note
// Have a look at "Sample Tests" to see the input and output in each language

function smallest(n) {
  n = String(n).split('').map(num => parseInt(num));
  let startIndex = null;
  let endIndex = null;
  let ascNums = n.slice().sort((a,b) => a - b);
  let nextSmallest = ascNums[1];
  // console.log(smallest, nextSmallest);
  // console.log(ascNums);
  // console.log(n);
  for (let i = 0; i < n.length; i++) {
    let smallest = ascNums[i];
    if (n[i] !== smallest) {
      startIndex = n.indexOf(smallest);
      // console.log(startIndex);
      n.splice(startIndex, 1);
      n.splice(i, 0, smallest);
      // n.unshift(smallest);
      // console.log(n);
      endIndex = n.indexOf(smallest);
      break;
    }
  }

  if (startIndex - endIndex === 1) {
    let value = endIndex;
    endIndex = startIndex;
    startIndex = value;
  }
  
  return [parseInt(n.join('')), startIndex, endIndex];
}

console.log(smallest(261235), [126235, 2, 0]);
console.log(smallest(209917), [29917, 0, 1]);
console.log(smallest(285365), [238565, 3, 1]);
console.log(smallest(269045), [26945, 3, 0]);
console.log(smallest(296837), [239687, 4, 1]);