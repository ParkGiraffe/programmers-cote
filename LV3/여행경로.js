function solution(tickets) {
  const graph = {};

  tickets.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [to];
    else graph[from].push(to);
  });

  Object.keys(graph).forEach((e) => graph[e].sort());
  console.log(graph);

  const stack = ["ICN"];
  const result = [];

  while (stack.length) {
    const top = stack.at(-1);

    if (graph[top] && graph[top].length > 0) {
      stack.push(graph[top].shift());
    } else {
      result.push(stack.pop());
    }
  }

  return result.reverse();
}
