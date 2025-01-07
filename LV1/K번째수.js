function solution(array, commands) {
  const answer = [];

  commands.forEach((e) => {
    answer.push(getJ(array, e));
  });

  return answer;
}

const getJ = (array, commands) => {
  const [i, j, k] = commands;

  const newArr = array.slice(i - 1, j).sort((a, b) => a - b);
  console.log(newArr);

  return newArr[k - 1];
};
