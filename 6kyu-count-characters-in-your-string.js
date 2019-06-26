'use strict';

// 8m 17s

// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

function count (string) {  
  let result = { };
  string = string.split('');
  for (let i = 0; i < string.length; i++) {
    if (result.hasOwnProperty(string[i])) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }
  return result;
}

console.log(count('aba'), { a: 2, b: 1 }); 
console.log(count(''), {});    