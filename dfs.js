// Implement a function `dfs` that accepts two arguments: the adjacency list
// representing a directed acyclic graph and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

function dfs(adjList, source) {
  const stack = [source];

  while (stack.length > 0) {
    let current = stack.pop();
    console.log(current);
    let neighbors = adjList.get(current);

    for (let neighbor of neighbors) {
      stack.push(neighbor);
    }
  }
}

// recursive solution
function dfs(adjList, source) {
  console.log(source);

  if (!adjList.has(source)) {
    return;
  }

  adjList.get(source).forEach(val => dfs(adjList, val));
}

// LS solution
function dfs(adjList, source) {
  console.log(source);
  let neighbors = adjList.get(source);
  for (let neighbor of neighbors) {
    dfs(adjList, neighbor);
  }
}

// const adjList = new Map();
// adjList.set(1, []);
// adjList.set(2, [1, 3, 4]);
// adjList.set(3, [5]);
// adjList.set(4, [6]);
// adjList.set(5, []);
// adjList.set(6, []);
// adjList.set(7, [6]);

// dfs(adjList, 2); // 2, 4, 6, 3, 5, 1 or 2, 1, 3, 5, 4, 6

const adjList = new Map([
  ['A', ['B']],
  ['B', []]
]);
dfs(adjList, 'C');


// Note that the output can vary based on the order in
// which you process neighbors. These two outputs are
// the most likely, but other valid orders exist.