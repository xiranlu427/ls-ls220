// Given an undirected graph represented by an edge list, determine if
// there is a path between specified source and destination vertices.

// Implement the function `hasPath` that takes three arguments:
// an edge list representing the graph, a source vertex, and a
// destination vertex. The function should return true if a path
// exists between the source and destination, and false otherwise.


// my solution using a stack
function hasPath(edgeList, src, dst) {
  if (src === dst) {
    return true;
  }

  const adjList = toAdjList(edgeList);
  const stack = [src];
  const visited = new Set([src]);

  while (stack.length > 0) {
    const current = stack.pop();
    if (current === dst) {
      return true;
    }

    const neighbors = adjList.get(current) || [];
    neighbors.forEach(val => {
      if (!visited.has(val)) {
        visited.add(val);
        stack.push(val);
      }
    });
  }

  return false;
}

// using recursion
function hasPath(edgeList, src, dst) {
  const adjList = createAdjList(edgeList);
  const visited = new Set();

  function dfs(src, dst) {
    if (src === dst) {
      return true;
    }
    visited.add(src);
    for (const neighbor of adjList.get(src)) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, dst)) {
          return true;
        }
      }
    }
    return false;
  }
  return dfs(src, dst);
}


function toAdjList(edgeList) {
  const adjList = new Map();

  edgeList.forEach(([vertex1, vertex2]) => {
    if (!adjList.has(vertex1)) adjList.set(vertex1, []);
    adjList.get(vertex1).push(vertex2);

    if (!adjList.has(vertex2)) adjList.set(vertex2, []);
    adjList.get(vertex2).push(vertex1);
  });

  return adjList;
}


console.log(hasPath([[1, 2], [2, 3], [3, 4]], 1, 4) === true);
console.log(hasPath([[1, 2], [3, 4]], 1, 4) === false);
console.log(hasPath([[1, 2], [1, 3], [2, 4], [3, 4], [3, 5], [5, 6]], 1, 6) === true);
console.log(hasPath([], 1, 1) === true);
console.log(hasPath([[1, 2], [1, 3], [4, 5], [6, 7]], 2, 5) === false);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [1, 5], [2, 6], [6, 7], [7, 8], [8, 5]], 1, 8) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3], [2, 7], [7, 8], [8, 7], [7, 9], [9, 10], [10, 11], [11, 12], [12, 10], [7, 13]], 1, 13) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 1], [4, 5], [5, 6], [6, 4], [7, 8], [8, 9], [9, 10], [10, 7], [11, 12], [13, 14], [14, 15], [15, 13]], 1, 12) === false);
// All test cases should log true