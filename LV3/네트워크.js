function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let graphCount = 0;

  const bfs = (start) => {
    const queue = [start];
    visited[start] = true;

    while (queue.length) {
      const node = queue.shift();
      for (let i = 0; i < n; i++) {
        if (computers[node][i] === 1 && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      graphCount++;
    }
  }

  return graphCount;
}
