function solution(order) {
  const stack = [];
  let cursor = 0;

  for (let i = 1; i <= order.length; i++) {
    stack.push(i);

    while (stack.length && stack.at(-1) == order[cursor]) {
      stack.pop();
      cursor++;
    }
  }

  return cursor;
}
