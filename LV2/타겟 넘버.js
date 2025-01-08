function solution(numbers, target) {
  const arr = [];
  dfs(numbers, target, 0, 0, arr);

  // console.log(arr);
  return arr.length;
}

const dfs = (numbers, target, i, total, arr) => {
  if (i >= numbers.length) {
    if (total === target) arr.push(1);
  } else {
    dfs(numbers, target, i + 1, total - numbers[i], arr);
    dfs(numbers, target, i + 1, total + numbers[i], arr);
  }
};
