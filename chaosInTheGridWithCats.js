// You are given a grid represented as a
// nested array filled with strings.

// Chaos is standing at the top-left corner of
// the grid and can move either down or right at
// any point in time. However, there are sleeping
// cats in certain squares, represented by the
// letter "C" in the grid, and Chaos cannot go through
// these squares.

// Determine the number of distinct paths Chaos
// can take to reach a bowl of treats placed at
// the bottom-right corner of the grid.

// Define a function `chaosInTheGridWithCats` that,
// given a nested array, returns the number of
// unique paths that Chaos can take to reach the
//  bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

/*
- input: a nested array of empty strings and "C" - a grid composed of empty cells and cats
- output: an int: number of distinct paths from top-left corner to bottom-right corner
- rules: 
  - cannot go through cells with cats ("C")
  - grid has at least 1 row and 1 column

DS 
- use a map to record all previous calculation

ALGO - recursive 
- the number of ways to arrive at a cell from the top-left corners equals the 
sum of ways to arrive at the cell to its left plus those to the cell above it
- if the top row or the leftmost column has "C"s, then the cells right to the 
first "C" on the top row or the cells below the first "C" on the leftmost 
columns have number 0. All other cells have number 1.
- if the cell above or left to the target cell has "C", then that cell has number 0
*/

// recursive approach
function chaosInTheGridWithCats(grid) {
  const memo = new Map();
  const rowIdx = grid.length - 1;
  const colIdx = grid[0].length - 1;

  function pathToCell(rowIdx, colIdx) {
    if (rowIdx < 0 || colIdx < 0) {
      return 0;
    }

    if (grid[rowIdx][colIdx] === 'C') {
      return 0;
    }

    if (rowIdx === 0 && colIdx === 0) {
      return 1;
    }
    
    const key = `${rowIdx} ${colIdx}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    const result = pathToCell(rowIdx - 1, colIdx) + pathToCell(rowIdx, colIdx - 1);

    memo.set(key, result);

    return result;
  }

  return pathToCell(rowIdx, colIdx);
}

// Test Cases:

const grid1 = [
  ["", "C"],
  ["", ""],
];
const grid2 = [["", "C"]];
const grid3 = [
  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],
];
const grid5 = [
  ["", "", "", "", "C", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "C", "", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
];

console.log(chaosInTheGridWithCats(grid1) === 1);
console.log(chaosInTheGridWithCats(grid2) === 0);
console.log(chaosInTheGridWithCats(grid3) === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5) === 43);