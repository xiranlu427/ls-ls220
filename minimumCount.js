// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

/*
ALGO:
- find the index of the rightmost negative number
- find the index of the leftmost positive number
*/
function minimumCount(array) {
  const firstPositiveIdx = findFirstPositiveIndex(array);
  const lastNegativeIdx = findLastNegativeIndex(array);

  const negativeCount = lastNegativeIdx + 1;
  const positiveCount = array.length - firstPositiveIdx;

  return Math.min(negativeCount, positiveCount);
}

function findFirstPositiveIndex(array) {
  let left = 0;
  let right = array.length - 1;

  let firstPositiveIdx = array.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] > 0) {
      firstPositiveIdx = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return firstPositiveIdx;
}

function findLastNegativeIndex(array) {
  let left = 0;
  let right = array.length - 1;
  let lastNegativeIdx = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] < 0) {
      lastNegativeIdx = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return lastNegativeIdx;
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.

