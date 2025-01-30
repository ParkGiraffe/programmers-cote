function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => new Array());

  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const queue = [1];
  const distance = new Array(n + 1).fill(-1);

  distance[1] = 0;

  while (queue.length) {
    const curNode = queue.shift();

    graph[curNode].forEach((e) => {
      if (distance[e] == -1) {
        distance[e] = distance[curNode] + 1;
        queue.push(e);
      }
    });
  }

  const max = Math.max(...distance);
  return distance.filter((e) => e === max).length;
}
