// Given a string `str`, reverse all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

/*
- input: a string 
- output: a new string where all consonants are reversed 
- rules:
  - preserve the case after swaps

ALGO
- turn the input string into an array of chars
- set both anchor and runner pointers to index 0
- while runner hasn't reached the end of the string
  - IF runner points to a consonant
    - swap chars at anchor and runner
    - increment anchor by 1 after a swap
  - IF anchor points to a vowel
    - increment anchor by 1
  - increment runner by 1
- join the chars in the modified array and return the result
*/

function reverseConsonants(str) {
  const consonant = /[b-df-hj-np-tv-z]/i;
  const chars = str.split('');

  let start = 0;
  let end = chars.length - 1;

  while (start < end) {
    if (!chars[start].match(consonant)) {
      start += 1;
      continue;
    }
    
    if (!chars[end].match(consonant)) {
      end -= 1;
      continue;
    }
  
    [chars[start], chars[end]] = [chars[end], chars[start]];
    start += 1;
    end -= 1;
  }

  return chars.join('');
}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");
console.log(reverseConsonants("aeiou") === "aeiou");

// All test cases should log true