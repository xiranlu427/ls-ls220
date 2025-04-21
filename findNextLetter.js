/*
You're given an array, chars, of lowercase English letters sorted in ascending
 order, and a lowercase letter, key. Your task is to find the smallest letter
  in chars that is lexicographically greater than key. If no such letter
   exists, return the first letter in chars.
*/

function findNextLetter(chars, key) {
  let smallest = chars[0];
  let left = 0;
  let right = chars.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (chars[mid] <= key) {
      left = mid + 1;
    } else {
      smallest = chars[mid];
      right = mid - 1;
    }
  }

  return smallest;
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.