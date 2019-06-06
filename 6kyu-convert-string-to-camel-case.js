'use strict';

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
  str = str.split(/[-_]/g);
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[0];
    } else {
      result += str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  }
  return result;
}

console.log(toCamelCase(''), '', 'An empty string was provided but not returned');
console.log(toCamelCase('the_stealth_warrior'), 'theStealthWarrior', 'toCamelCase(\'the_stealth_warrior\') did not return correct value');
console.log(toCamelCase('The-Stealth-Warrior'), 'TheStealthWarrior', 'toCamelCase(\'The-Stealth-Warrior\') did not return correct value');
console.log(toCamelCase('A-B-C'), 'ABC', 'toCamelCase(\'A-B-C\') did not return correct value');