function solution(prices) {
  const stack = [];
  const result = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack.at(-1)] > prices[i]) {
      const start = stack.pop();
      result[start] = i - start;
    }
    stack.push(i);
  }

  // console.log(stack);

  while (stack.length) {
    const start = stack.pop();
    result[start] = prices.length - start - 1;
  }

  return result;
}
