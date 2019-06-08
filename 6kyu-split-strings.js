'use strict';

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters 
// then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
  let result = [];
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  for (let i = 0; i < str.length; i += 2) {
    let splits = str.charAt(i)+str.charAt(i+1);
    result.push(splits);
  }
  return result;
}

console.log(solution('abc')); // should return ['ab', 'c_']
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']