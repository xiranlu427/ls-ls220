// Write a function `findPeakInTerrain` that finds any peak in a
// given hilly terrain. A peak is an element that is strictly
// greater than its neighbors. The first and last elements can
// be peaks if they are strictly greater than their single neighbor.
// Adjacent elements in the terrain cannot be equal.

// The function should take an array of integers as input,
// representing the elevations of spots in the terrain.
// It should return the index of any peak in the terrain.
// There is guaranteed to be at least one peak in the input array.

// Example:
// Input: terrain = [1, 3, 2, 1, 4, 5]
// Output: 1 or 5
// Explanation: Both index 1 (elevation 3) and index 5
//              (elevation 5) are peaks.

// function findPeakInTerrain(terrain) {
//   let left = 0;
//   let right = terrain.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (mid === 0 && terrain[mid] > terrain[mid + 1]) {
//       return mid;
//     }

//     if (mid === terrain.length - 1 && terrain[mid] > terrain[mid - 1]) {
//       return mid;
//     }

//     if (terrain[mid] > terrain[mid - 1] && terrain[mid] > terrain[mid + 1]) {
//       return mid;
//     } else if (terrain[mid] === terrain[mid - 1]) {
//       right = mid - 2;
//     } else if (terrain[mid] < terrain[mid - 1]) {
//       right = mid - 1;
//     } else if (terrain[mid] === terrain[mid + 1]) {
//       left = mid + 2;
//     } else if (terrain[mid] < terrain[mid + 1]) {
//       left = mid + 1;
//     }

//     findPeakInTerrain(terrain.slice(0, right + 1));
//     findPeakInTerrain(terrain.slice(left));
//   }
// }

function findPeakInTerrain(terrain) {
  let left = 0;
  let right = terrain.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (
      (mid === 0 || terrain[mid] > terrain[mid - 1]) &&
      (mid === right || terrain[mid] > terrain[mid + 1])
     ) {
      return mid;
    }

    if (mid > 0 && terrain[mid - 1] > terrain[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(findPeakInTerrain([1, 2, 1]) === 1);
console.log(findPeakInTerrain([1, 3, 4, 1]) === 2);
console.log(findPeakInTerrain([3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3]) === 2);
console.log([1, 4].includes(findPeakInTerrain([1, 3, 2, 1, 5, 4])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 7, 3]) === 5);
console.log(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log([0, 8].includes(findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]) === 4);
console.log(findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 9);

// All test cases should log true