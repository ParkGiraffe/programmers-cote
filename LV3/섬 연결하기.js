function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: n }, (_, i) => i);

  const find = (x) => {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x]));
  };

  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) parent[rootB] = rootA;
  };

  let totalCost = 0;
  let edges = 0;

  for (const [a, b, cost] of costs) {
    if (find(a) !== find(b)) {
      union(a, b);
      totalCost += cost;
      edges += 1;

      if (edges === n - 1) break;
    }
  }

  return totalCost;
}
