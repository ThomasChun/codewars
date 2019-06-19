'use strict';

// Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

// Sample Input: 07:05:45PM Sample Output: 19:05:45

// Try not to use built in DateTime libraries.

// For more information on military time, check the wiki https://en.wikipedia.org/wiki/24-hour_clock#Military_time

var getMilitaryTime = function(input) {
  input = input.split('');
  let amPm = input.splice(8, 2);
  let time = (input).join('').split(':');

  if (amPm[0] === 'A') {
    if ((time[0]) === '12') {
      time[0] = '00';
    }
  }

  if (amPm[0] === 'P') {
    time[0] = String(parseInt(time[0]) + 12);
    if (time[0] === '24') {
      time[0] = '12';
    }
  }
  return time.join(':');
}; 

console.log(getMilitaryTime('12:00:01AM'), '00:00:01');
console.log(getMilitaryTime('01:00:01AM'), '01:00:01');
console.log(getMilitaryTime('11:00:01AM'), '11:00:01');
console.log(getMilitaryTime('12:00:00PM'), '12:00:00');
console.log(getMilitaryTime('11:46:47PM'), '23:46:47');