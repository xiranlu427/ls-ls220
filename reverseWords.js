/*
- input: a string
- output: a new string with all the chars in each word of the original string
reversed, and the case of each char unchanged
- rules:
  - spaces should be preserved
  - order of words should be preserved

DS
- use an array to represent all words

ALGO
*/

function reverseWords(str) {
  const wordsAsChars = str.split(' ').map(word => word.split(''));

  for (const word of wordsAsChars) {
    let start = 0;
    let end = word.length - 1;

    while (start < end) {
      [word[start], word[end]] = [word[end], word[start]];
      start += 1;
      end -= 1;
    }
  }

  return wordsAsChars.map(word => word.join('')).join(' ');
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");