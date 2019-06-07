'use strict';

// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 1; i <= nFloors; i++) {
    let spacesCount = nFloors - i;
    let spaces = '';
    while (spacesCount > 0) {
      spaces += ' ';
      spacesCount--;
    }
    let stars = '*';
    for (let j = 1; j < i; j++) {
      stars += '**';
    }
    let floor = '' + spaces + stars + spaces;
    tower.push(floor);
  }
  return tower;
}

console.log(towerBuilder(1), ['*']);
console.log(towerBuilder(2), [' * ','***']);
console.log(towerBuilder(3), ['  *  ',' *** ','*****']);