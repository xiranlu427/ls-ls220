// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.

/*
PROBLEM
- input: a list of numbers
- output: a list of two numbers that add up to ten, OR null
- rules:
  - there will be at most one pair of numbers that satisfies the condition

DS
- use an array to represent the input and output

*/

function findPair(nums) {
  for (let current = 0; current < nums.length - 1; current += 1) {
    for (let next = current + 1; next < nums.length; next += 1) {
      if (nums[current] + nums[next] === 10) {
        return [nums[current], nums[next]];
      }
    }
  }
  return null;
}

// optimal solution
function findPair(nums) {
  const numMap = new Map();
  const target = 10;

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [complement, nums[i]];
    }

    numMap.set(nums[i], i);
  }

  return null;
}
// Test Cases:

console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]
console.log(findPair([])); // null