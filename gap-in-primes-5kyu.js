'use strict';

// Gap in Primes
// https://www.codewars.com/kata/gap-in-primes/train/javascript

// The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. 
// From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, 
// n if these numbers exist otherwise nil or null or None or Nothing (depending on the language).

// In C++ return in such a case {0, 0}. In F# return [||]. In Kotlin return []

// #Examples: gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}

// gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin return[]`

// gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

// ([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)

// gap(6,100,110) --> nil or {0, 0} : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap 
// because there is 103in between and 103-109is not a 6-gap because there is 107in between.


function gap(g, m, n) {
  // first find prime numbers
  let primeArr = [];
  for (let i = m; i < n; i++) {
    let prime = true;
    let j = 2;
    while (prime && j < i) {
      if (i % j === 0) {
        prime = false;
      }
      if (j === 2) {
        j++;
      } else {
        j += 2;
      }
    }
    if (prime) {
      primeArr.push(i);
      // if prime array has length of two compare the gap
      if (primeArr.length === 2) {
        if (primeArr[1] - primeArr[0] === g) {
          return [primeArr[0], primeArr[1]];
        } else {
          primeArr = [primeArr[1]];
        }
      }
    }
  }
  return null;
}

console.log(gap(8, 79, 100), '[89, 97]');
console.log(gap(2, 100, 110), '[101, 103]');
console.log(gap(4, 100, 110), '[103, 107]');
console.log(gap(6, 100, 110), 'null');
console.log(gap(8, 300, 400), '[359, 367]');
console.log(gap(10, 300, 400), '[337, 347]');

// Alternative solutions

// Solution #1
function gap(g, m, n) {
  var lastPrime = 0;
  var isPrime = function (x) {
    for (var i = 2; i * i <= x; i++) { if (x % i == 0) return false; } return true;
  }

  for (var i = m; i <= n; i++)
    if (isPrime(i)) {
      if (i - lastPrime == g) return [lastPrime, i];
      else lastPrime = i;
    }

  return null;
}

// Solution #2
function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  var m = Math.sqrt(n);
  for (var i = 2; i <= m; i++) if (n % i == 0) return false;
  return true;
}

function gap(g, m, n) {
  let mx = 0;
  for (m, n; m < n; m++) {
    if (isPrime(m)) {
      if (m - mx === g) return [mx, m];
      mx = m;
    }
  }
  return null;
}

// Solution #3
var primes = [2];
var notPrimes = [];

function gap(g, m, n) {
  if (m % 2 === 0) m = m + 1;
  for (var i = m; i < n - g; i += 2) {
    if (isPrime(i) && isPrime(i + g)) {
      var concurrent = true;
      for (var j = i + 2; j < (i + g); j += 2) {
        if (isPrime(j)) { concurrent = false; break; }
      }
      if (concurrent) return [i, i + g];
    }
  }
  return null;
}

function isPrime(num) {
  if (primes.indexOf(num) !== -1) return true;
  if (notPrimes.indexOf(num) !== -1) return false;
  if (num % 2 === 0) return false;
  if (num % 3 === 0) return false;
  if (num % 5 === 0) return false;

  for (var i = 7; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      notPrimes.push(num);
      return false
    }
  }
  primes.push(num);
  return true;
}