// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

function findMajority(arr) {
  const count = {};

  for (let num of arr) {
    count[num] = count[num] || 0;
    count[num] += 1;

    if (count[num] >= Math.ceil(arr.length / 2)) {
      return Number(num);
    }
  }
}

// alternative solution
function findMajority(arr) {
  // First pass: find the candidate
  let candidate = null;
  let count = 0;
  
  for (let num of arr) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }
  
  // Second pass: verify the candidate is actually a majority
  let candidateCount = 0;
  for (let num of arr) {
    if (num === candidate) {
      candidateCount++;
    }
  }
  
  // Use Math.ceil for threshold as defined in your original function.
  if (candidateCount >= Math.ceil(arr.length / 2)) {
    return candidate;
  }
  
  return null; // or an empty string if you prefer
}

// Test Cases:

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true