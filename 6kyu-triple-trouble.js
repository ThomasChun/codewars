'use strict'; 

// Triple trouble
// https://www.codewars.com/kata/triple-trouble-1/javascript

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
  num1 = (num1.toString());
  num2 = (num2.toString());
  let triple = '';
  // create loop to iterate through num
  for (let i = 1; i < num1.length - 1; i++) {
    // check to see if current index = the index before and after it.
    if (num1[i] === num1[i - 1] && num1[i] === num1[i + 1]) {
      triple += num1[i];
      console.log('n1 trip', triple);
    }
  }
  if (triple === undefined) {
    return 0;
  } else {
    // check if the value of triple occurs 2x in a row in num2
    for (let i = 0; i < num2.length - 1; i++) {
      // loop through all triple numbers found in num1 not just the first occurance.
      for (let j = 0; j < triple.length; j++) {
        if (num2[i] === triple[j] && num2[i + 1] === triple[j]) {
          return 1;
        }
      }
    }
    return 0;
  }
}

console.log(tripledouble(451999277, 41177722899), '1');
console.log(tripledouble(1222345, 12345), '0');
console.log(tripledouble(12345, 12345), '0');
console.log(tripledouble(666789, 12345667), '1');
console.log(tripledouble(10560002, 100), '1');
console.log(tripledouble(7993366668888111, 572571881), '1');


// Alternative solutions

// Solution #1
function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}

// Solution #2
function tripledouble(num1, num2) {
  for (var i = 0; i < 10; i++) {
    triple = new RegExp(i + "{3}")
    double = new RegExp(i + "{2}")
    if (triple.test(num1) && double.test(num2)) {
      return 1
    }
  }
  return 0
}

// Solution #3
function tripledouble(num1, num2) {
  let nums = [...Array(10).keys()];

  return +nums.some(num =>
    num1.toString().includes(num.toString().repeat(3)) &&
    num2.toString().includes(num.toString().repeat(2))
  );
}