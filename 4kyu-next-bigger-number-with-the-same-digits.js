'use strict'; 

//

// Next bigger number with the same digits
// https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript

// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// NOT COMPLETE -- NEED TO ADDRESS 0;
function nextBigger(n){
  n = String(n).split('');
  n = n.map(num => parseInt(num));
  let length = n.length;
  for (let i = length - 1; i > 0; i--) {
    if (n[i] > n[i-1]) {
      let currValue = n[i];
      n[i] = n[i-1];
      n[i-1] = currValue;
      return parseInt(n.join(''));
    }
  }
  return -1;
}

// console.log(nextBigger(7890), '7908'); 
console.log(nextBigger(59884848459853), '59884848483559');


// console.log(nextBigger(12),'21'); // 21
// console.log(nextBigger(513),'531'); // 531
// console.log(nextBigger(2017),'2071'); // 2071
// console.log(nextBigger(414),'441'); // 441
// console.log(nextBigger(144),'414'); // 414

// console.log(nextBigger(9),'-1');
// console.log(nextBigger(111),'-1');
// console.log(nextBigger(531),'-1');