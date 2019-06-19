'use strict';

// Your task is to write function factorial

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
  let factorial = 1;
  for (let i = 0; i < n; i++) {
    factorial *= (n - i);
  }
  return factorial;
}

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);