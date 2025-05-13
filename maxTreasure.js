// An adventurer is embarking on a quest through a mysterious grid-like
// landscape filled with hidden treasures. The landscape is represented by a grid
// with M rows and N columns. Our adventurer begins their journey in the top-left
// corner and aims to reach the bottom-right corner, all while gathering as much
// treasure as possible.
//
// Rules:
// 1. The adventurer can only move in two directions: right and down.
// 2. Each cell in the grid contains a certain amount of treasure, represented by
//    a non-negative integer.
// 3. Upon entering a cell, the adventurer automatically collects the treasure there.
//
// Task:
// Create a function `maxTreasure` that takes a 2D grid as input. Each cell
// in the grid contains a non-negative integer representing the amount of treasure.
// The function should return the maximum possible treasure the adventurer can
// accumulate while traveling from the top-left to the bottom-right corner.
//
// Example:
// grid = [
//   [1, 3, 1, 5],
//   [2, 2, 4, 1],
//   [5, 0, 2, 3],
//   [0, 6, 1, 2]
// ]
//
// maxTreasure(grid) should return 17
//
// Explanation: The optimal path is 1 -> 3 -> 2 -> 4 -> 2 -> 3 -> 2
// collecting a total of 17 treasure units.
//
// Constraints:
// - The grid will always have at least one cell.
// - All values in the grid will be non-negative integers.
// - The grid dimensions M and N will be positive integers.

function maxTreasure(grid) {
  // Implementation goes here
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;

  if (rows === 1 && cols === 1) {
    return grid[0][0];
  }

  for (let row = 1; row < rows; row += 1) {
    grid[row][0] += grid[row - 1][0];
  }

  for (let col = 1; col < cols; col += 1) {
    grid[0][col] += grid[0][col - 1];
  }

  for (let row = 1; row < rows; row += 1) {
    for (let col = 1; col < cols; col += 1) {
      grid[row][col] += Math.max(grid[row - 1][col], grid[row][col - 1]);
    }
  }

  return grid[rows - 1][cols - 1];
 }

// recursive solution
function maxTreasure(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const cache = Array(rows).fill().map(() => Array(cols).fill(-1));

  function maxSumToCoord(row, col) {
    if (row === 0 && col === 0) {
      return grid[row][col];
    } 
    
    if (row < 0 || col < 0) {
      return 0;
    }
    
    if (cache[row][col] !== -1) {
      return cache[row][col];
    } 

    const fromTop = maxSumToCoord(row - 1, col);
    const fromLeft = maxSumToCoord(row, col - 1);
    const maxSum = grid[row][col] += Math.max(fromTop, fromLeft);

    cache[row][col] = maxSum;
    return maxSum;
  }
  
  return maxSumToCoord(rows - 1, cols - 1);
}

// Test cases
const grid1 = [[7]];
const grid2 = [[1, 3], [2, 4]];
const grid3 = [
  [1, 3, 1, 5],
  [2, 2, 4, 1],
  [5, 0, 2, 3],
  [0, 6, 1, 2]
];

const grid4 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

const grid5 = [
  [1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1]
];

const largeGrid = Array(200).fill().map(() => Array(200).fill(1));

console.log(maxTreasure(grid1) === 7);
console.log(maxTreasure(grid2) === 8);
console.log(maxTreasure(grid3) === 17);
console.log(maxTreasure(grid4) === 149);
console.log(maxTreasure(grid5) === 21);
// The test case below should time out with a brute force approach.
console.log(maxTreasure(largeGrid) === 399);

// All test cases should log true