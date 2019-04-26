'use strict';

// Complementary DNA
// https://www.codewars.com/kata/complementary-dna/train/javascript

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the 
// development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one 
// side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never 
// empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 

function DNAStrand(dna){
  let compSide = '';
  for (let i = 0; i < dna.length; i++) {
    if (dna.charAt(i) === 'A') {
      compSide += 'T';
    } else if (dna.charAt(i) === 'T') {
      compSide += 'A';
    } else if (dna.charAt(i) === 'C') {
      compSide += 'G';
    } else if (dna.charAt(i) === 'G') {
      compSide += 'C';
    } else {
      return 'Invalid DNA Strand!';
    }
  }
  return compSide;
}

console.log(DNAStrand('AAAA'),'TTTT');
console.log(DNAStrand('ATTGC'),'TAACG');
console.log(DNAStrand('GTAT'),'CATA');