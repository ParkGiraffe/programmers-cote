function solution(arr) {
  const stack = [];

  arr.forEach((e) => {
    let top = stack[stack.length - 1];

    if (top !== e) stack.push(e);
  });

  console.log(stack);

  return stack;
}
