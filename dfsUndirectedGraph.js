// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

// my solution using a stack
function dfs(adjList, source) {
  const stack = [source];
  const visited = new Set([source]);

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    const neighbors = adjList.get(current) || [];

    neighbors.forEach(val => {
      if (!visited.has(val)) {
        visited.add(val);
        stack.push(val);
      }
    });
  }
}

const adjList = new Map();
adjList.set(1, [2]);
adjList.set(2, [1, 3]);
adjList.set(3, [2]);

dfs(adjList, 1); // 1, 2, 3