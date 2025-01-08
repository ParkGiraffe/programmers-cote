function solution(number, k) {
  let remove = 0;
  const stack = [];

  for (let digit of number) {
    while (stack.length > 0 && remove < k && stack.at(-1) < digit) {
      stack.pop();
      remove++;
    }

    stack.push(digit);
  }

  while (remove < k) {
    stack.pop();
    remove++;
  }

  return stack.join("");
}
