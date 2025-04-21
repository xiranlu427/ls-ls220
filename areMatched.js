// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

/*
- input: a string that includes three types of brackets: (), [], and {}; it may
include other characters as well
- output: a boolean value true / false: whether all brackets are matched
- rules:
  - each opening must have a corresponding closing bracket
  - all brackets must be correctly nested

DS
- use an array to represent all brackets of the string

ALGO
- extract all brackets from the input array into an array
- IF the length of the array is odd => false
- set pointer start to 0
- set pointer end to arr.length - 1
- while (start < end):
  - iterate through the array:
    - IF the first bracket is not an opening bracket => false
    - check IF the opening bracket at start matches the closing bracket at end
      - IF NOT => false
    - increment start by 1
    - decrement end by 1
- return true
*/


function areMatched(str) {
  const matchedBrackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  const brackets = str.match(/[\{\}\(\)\[\]]/g) || [];
  const stack = [];
  
  for (const el of brackets) {
    if (matchedBrackets[el]) {
      stack.push(el);
    } else {
      const lastOpen = stack.pop();
      if (matchedBrackets[lastOpen] != el) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false