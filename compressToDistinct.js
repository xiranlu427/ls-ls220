// Given a sorted array of integers, your task is to implement a function
// `compressToDistinct` that modifies the array in-place to ensure
// it starts with a sequence of distinct elements in their original order.
// After making these modifications, the function should return
// the count of these distinct elements.

// The elements in the latter part of the array, after the distinct ones, are not important.

// Example:

// If the input array is [3, 3, 5, 7, 7, 8], there are four distinct elements: 3, 5, 7, and 8.
// After modifying the array to place these distinct elements at the beginning,
// the resulting array should look like this -> [3, 5, 7, 8, _, _].
// The underscores (_) represent the elements that are no longer important.

// You should name the function `compressToDistinct` for the tests to work correctly.

/*
- input: an array
- output: an int: number of distinct elements in the array
- rules:
  - should modify the array in place, where the distinct elements appear first,
   in their original order; the rest elements are not important

ALGO
- create a set to store all distinct values that have been seen 
- set anchor to 0
- set runner to 0
- while runner hasn't reach the end of array
  - IF runner points to a distinct element 
    - swap elements referenced by anchor and runner
    - increment anchor by 1
  - increment runner by 1
*/

function compressToDistinct(array) {
  const seen = new Set();
  let anchor = 0;
  let runner = 0;

  while (runner < array.length) {
    if (!seen.has(array[runner])) {
      seen.add(array[runner]);
      [array[anchor], array[runner]] = [array[runner], array[anchor]];
      anchor += 1;
    }
    
    runner += 1;
  }

  return seen.size;
}

function testCompressToDistinct(array, expectedLength) {
  const originalReference = array;
  const resultLength = compressToDistinct(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array.slice(0, expectedLength).every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testCompressToDistinct([3, 3, 5, 7, 7, 8], 4));
console.log(testCompressToDistinct([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
console.log(testCompressToDistinct([0], 1));
console.log(testCompressToDistinct([-5, -3, -3, -1, 0, 0, 0, 1], 5));
console.log(testCompressToDistinct([6, 6, 6, 6, 6, 6, 6], 1));

// All tests should log true.