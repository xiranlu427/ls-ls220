// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

function longestSubstringLength(string) {
  if (!string) {
    return 0;
  }

  const lastSeen = new Map();
  let anchor = 0;
  let runner = 0;
  let maxLen = 0;

  while (runner < string.length) {
    const char = string[runner];
    if (lastSeen.has(char) && lastSeen.get(char) >= anchor) {
      anchor = lastSeen.get(char) + 1;
    }

    lastSeen.set(char, runner);
    const windowLen = runner - anchor + 1;
    maxLen = Math.max(windowLen, maxLen);

    runner += 1;
  }

  return maxLen;
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);