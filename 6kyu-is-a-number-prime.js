'use strict';

// Is a number prime?
// https://www.codewars.com/trainer/javascript

// Is Prime
// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example
// bool isPrime(5) = return true
// Assumptions
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).

function isPrime(num) {
  // address 2 as prime num
  if (num === 2) {
    return true;
  }
  // check if num is less than zero
  if (num <= 1 || num % 2 === 0) {
    return false;
  }
  // create for loop that iterates odd num checking if num is divisible
  for (let i = 3; i < num; i += 2) {
    // if num mod i is 0 then it is not a prime #
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));


// Alternative solutions
// Solution #1
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}

// Solution #2
function isPrime(num) {
  var prime = true;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
    }
  }
  return (num < 2) ? false : prime;
}

// Solution #3
function isPrime(n) {
  if (n <= 1)
    return false;
  if (n <= 3 || n == 5 || n == 7 || n == 11)
    return true;
  if (n % 2 === 0 || n % 3 === 0)
    return false;
  for (var i = 5; i <= Math.pow(n, 0.5); i += 6)
    if (n % i === 0 || n % (i + 2) === 0)
      return false;
  return true;
}