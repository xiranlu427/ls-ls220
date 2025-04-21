/*
You have an ordered array nums consisting of integers. Your task is to
 determine whether there are any two distinct elements in the array where one
  element is exactly three times the value of the other element. The time
   complexity of the solution should be O(N).

Restrictions:

You should not use built-in methods like filter, map, reduce, or find.
Do not use the includes method for checking existence in the array.
Avoid using indexOf or lastIndexOf.
*/

// this solution only works for non-negative integers as array elements
function checkTripleMatch(nums) {
  const tripleMatch = {};

  for (let i = 0; i < nums.length; i += 1) {
    // if the current element exists in the tripleMatch object, that means it's
    // a triple of an encountered element
    if (nums[i] in tripleMatch) {
      return true;
    }
    // if the current element doesn't exist in the object, add its triple to
    // the object as key, and itself as value, marking that we have seen this
    // element
    tripleMatch[nums[i] * 3] = nums[i];
  }
  return false;
 }

// correct solution
function checkTripleMatch(nums) {
  const seen = new Set();
  for (const x of nums) {
    if ((x % 3 === 0 && seen.has(x/3)) || seen.has(x*3)) {
      return true;
    }
    seen.add(x);
  }
  return false;
}

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.