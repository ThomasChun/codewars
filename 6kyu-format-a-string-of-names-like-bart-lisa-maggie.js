'use strict';

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names) {
  let result = '';
  if (names.length === 0) {
    return '';
  }
  if (names.length === 1) {
    return names[0].name;
  }
  for (let i = 0; i < names.length - 1; i++) {
    if (i === names.length -2) {
      result += names[i].name;
    } else {
      result += names[i].name + ', ';
    }
  }
  result += ' & ' + names[names.length-1].name;
  return result;
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]), 'Bart, Lisa, Maggie, Homer & Marge', 'Must work with many names');
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie', 'Must work with many names');
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa', 'Must work with two names');
console.log(list([{ name: 'Bart' }]), 'Bart', 'Wrong output for a single name');
console.log(list([]), '', 'Must work with no names');