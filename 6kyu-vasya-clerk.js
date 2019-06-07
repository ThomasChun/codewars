'use strict';

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
// Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine){
  let changeMap = {
    '25': 0,
    '50': 0,
    '100': 0,
  };
  for (let amount of peopleInLine) {
    let billPaid = amount.toString();
    changeMap[billPaid] = (changeMap[billPaid] + 1) || 1;
    let changeNeeded = amount - 25;
    if (changeNeeded === 25) {
      changeMap['25'] = changeMap['25'] - 1;
      if (changeMap['25'] === -1) {
        return 'NO';
      }
    } else if (changeNeeded === 50) {
      if (changeMap['50'] >= 1) {
        changeMap['50'] = changeMap['50'] - 1;
      } else if (changeMap['25'] >= 2) {
        changeMap['25'] = changeMap['25'] - 2;
      } else {
        return 'NO';
      }
    } else if (changeNeeded === 75) {
      if (changeMap['50'] >= 1 && changeMap['25'] >= 1) {
        changeMap['50'] = changeMap['50'] - 1;
        changeMap['25'] = changeMap['25'] - 1;
      } else if (changeMap['25'] >= 3) {
        changeMap['25'] = changeMap['25'] - 3;
      } else {
        return 'NO';
      }
    }
  }
  return 'YES';
}

console.log(tickets([25, 25, 50, 50]), 'YES');
console.log(tickets([25, 100]), 'NO');
console.log(tickets([25,25,25,100,25,25,50,100,25,50,25,100,25,25,50,100,25,25,50,100,25,50,50,100]), 'NO');
console.log(tickets([25,25,50,100,25,25,50,100,25,25,25,100,50,25]), 'NO');