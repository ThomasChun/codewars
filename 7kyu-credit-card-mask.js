'use strict';

// https://www.codewars.com/kata/5412509bd436bd33920011bc

// return masked string
function maskify(cc) {
  cc = cc.split('');
  if (cc.length > 4) {
    for (let i = 0; i < cc.length - 4; i++) {
      cc[i] = '#';
    }
  }
  return cc.join('');
}
console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');