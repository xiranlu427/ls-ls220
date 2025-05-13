// You are given two strings. Your task is to find the length of
// the longest subsequence that is shared between both strings.

// A subsequence is a sequence that can be derived from another
// sequence by deleting some or no elements without changing the
// order of the remaining elements. For example, "ace" is a
// subsequence of "abcde".

// Implement a function `longestSharedSubsequence` that takes
// two strings as input and returns the length of the longest
// shared subsequence between them.

// Example 1:
// Input: str1 = "abcde", str2 = "ace"
// Output: 3
// Explanation: The longest shared subsequence is "ace" and its length is 3.

// Example 2:
// Input: str1 = "abcbdab", str2 = "bdcaba"
// Output: 4
// Explanation: There are three shared subsequences with length 4.
//              'bcab', 'bcba', and 'bdab'.

// Example 3:
// Input: str1 = "xmjyauz", str2 = "mzjawxu"
// Output: 4
// Explanation: The longest shared subsequence is "mjau".

// recursive solution
function longestSharedSubsequence(s1, s2) {
  const cache = new Map();

  const helper = (p1, p2) => {
    const key = `${p1},${p2}`;
    if (cache.has(key)) {
      return cache.get(key);
    }

    if (p1 === s1.length || p2 === s2.length) {
      return 0;
    }

    let result;
    if (s1[p1] === s2[p2]) {
      result = 1 + helper(p1 + 1, p2 + 1);
    } else {
      result = Math.max(helper(p1, p2 + 1), helper(p1 + 1, p2));
    }

    cache.set(key, result);
    return result;
  };

  return helper(0, 0);
}

// iterative solution
function longestSharedSubsequence(s1, s2) {
  // Implementation goes here
  const len1 = s1.length;
  const len2 = s2.length;
  const dp = new Array(len1 + 1).fill().map(() => new Array(len2 + 1).fill(0));
  
  for (let p1 = 0; p1 < len1; p1 += 1) {
    for (let p2 = 0; p2 < len2; p2 += 1) {
      if (s1[p1] === s2[p2]) {
        dp[p1 + 1][p2 + 1] = 1 + dp[p1][p2];
      } else {
        dp[p1 + 1][p2 + 1] = Math.max(dp[p1][p2 + 1], dp[p1 + 1][p2]);
      }
    }
  }

  return dp[len1][len2];
}

// Test cases
console.log(longestSharedSubsequence("abcde", "ace") === 3);
console.log(longestSharedSubsequence("abcbdab", "bdcaba") === 4);
console.log(longestSharedSubsequence("xmjyauz", "mzjawxu") === 4);
console.log(longestSharedSubsequence("abcdgh", "aedfhr") === 3);
console.log(longestSharedSubsequence("aggtab", "gxtxayb") === 4);
console.log(longestSharedSubsequence("aaaa", "aa") === 2);
console.log(longestSharedSubsequence("aaaa", "bb") === 0);
console.log(longestSharedSubsequence("", "abcd") === 0);
console.log(longestSharedSubsequence("abcd", "") === 0);
console.log(longestSharedSubsequence("", "") === 0);
console.log(longestSharedSubsequence("a", "a") === 1);
console.log(longestSharedSubsequence("zyxwvutsrqp", "abcdefghijklmnop") === 1);
console.log(longestSharedSubsequence("abcabcabc", "acbacbacb") === 6);
console.log(longestSharedSubsequence("aaaaabbbbb", "bbbbbaaaaa") === 5);
console.log(longestSharedSubsequence("abcdabcdabcd", "abcdabcdabcd") === 12);

// All test cases should log true