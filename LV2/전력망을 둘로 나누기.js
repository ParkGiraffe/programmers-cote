function solution(n, wires) {
  let min = Infinity;

  const buildGraph = (newWires) => {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [v1, v2] of newWires) {
      graph[v1].push(v2);
      graph[v2].push(v1);
    }
    return graph;
  };

  const countNodes = (graph, start, visited) => {
    const queue = [];
    let count = 1;

    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      const current = queue.shift();

      graph[current].forEach((next) => {
        if (!visited[next]) {
          visited[next] = true;
          count++;
          queue.push(next);
        }
      });
    }

    return count;
  };

  for (let i = 0; i < wires.length; i++) {
    const newWires = wires.slice(0, i).concat(wires.slice(i + 1));
    const visited = new Array(n + 1).fill(false);

    const newGraphs = buildGraph(newWires);
    const firstCount = countNodes(newGraphs, 1, visited);
    const secondCount = n - firstCount;

    min = Math.min(min, Math.abs(firstCount - secondCount));
  }

  return min;
}
