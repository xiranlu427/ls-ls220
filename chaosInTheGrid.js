// You are given a grid represented as a nested array filled
// with empty strings. Chaos, the puppy, is standing at the
// top-left corner of the grid and can move either down or right
// at any point in time. Determine the number of distinct paths
// Chaos can take to reach a bowl of treats placed at the
// bottom-right corner of the grid.

// Define a function `chaosInTheGrid` that, given a nested
// array, returns the number of unique paths that Chaos
// can take to reach the bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "", ""],
  ["", "", ""],
];

// There are three distinct path Chaos can take:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

// my solution w/o memoization
// time complexity: 2^(R + C); space complexity: O(R + C) 
function chaosInTheGrid(grid) {
  const rowIdx = grid.length - 1;
  const colIdx = grid[0].length - 1;
  return chaosInTheGridHelper(rowIdx, colIdx);
}

function chaosInTheGridHelper(rowIdx, colIdx) {
  if (rowIdx === 0 || colIdx === 0) {
      return 1;
  }

  return chaosInTheGridHelper(rowIdx - 1, colIdx) + chaosInTheGridHelper(rowIdx, colIdx - 1);
}

// my solution w/ memoization
// time complexity: O(R * C); space complexity: O(R * C)
function chaosInTheGrid(grid) {
  const memo = new Map();
  const rowIdx = grid.length - 1;
  const colIdx = grid[0].length - 1;

  function chaosInTheGridHelper(rowIdx, colIdx) {
    if (rowIdx === 0 || colIdx === 0) {
      return 1;
    }

    const key = `${rowIdx}${colIdx}`;
    if (memo.has(key)) {
      return memo.get(key);
    }
  
    const result = chaosInTheGridHelper(rowIdx - 1, colIdx) + chaosInTheGridHelper(rowIdx, colIdx - 1);

    memo.set(key, result);

    return result;
  }

  return chaosInTheGridHelper(rowIdx, colIdx);
}

// LS solution using a nested array as cache:
function chaosInTheGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Initialize a cache as a nested array filled with zeroes
  const cache = new Array(rows).fill().map(() => new Array(cols).fill(0));

  function pathsToCoord(row, col) {
    if (row === 0 || col === 0) {
      return 1;
    }

    if (cache[row][col] !== 0) {
      return cache[row][col];
    }

    cache[row][col] = pathsToCoord(row - 1, col) + pathsToCoord(row, col - 1);

    return cache[row][col];
  }

  return pathsToCoord(rows - 1, cols - 1);
}

const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];
console.log(chaosInTheGrid(grid1) === 1);
console.log(chaosInTheGrid(grid2) === 2);
console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
console.log(chaosInTheGrid(grid5) === 252);
// All test cases should log true