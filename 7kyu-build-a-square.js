'use strict';
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(int){
  return int === 0 ? '' : ('+'.repeat(int) + '\n').repeat(int - 1) + '+'.repeat(int);
}

console.log( generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' );