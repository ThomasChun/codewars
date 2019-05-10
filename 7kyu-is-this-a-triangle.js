'use strict';

// https://www.codewars.com/kata/is-this-a-triangle/train/javascript

function isTriangle(a, b, c) {
  return (0.25 * Math.sqrt((a+b+c) * (-a+b+c) * (a-b+c) * (a+b-c))) > 0 ? true: false;
}

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);