// 1번수포자 : 1 2 3 4 5 (5개)
// 2번수포자 : 2 1 2 3 2 4 2 5 (10개)
// 3번수포자 : 33 11 22 44 55 (10개)

// 11번 테스트케이스 틀림 이슈
function solution(answers) {
  const first = [];
  const second = [];
  const third = [];
  const answer = [];

  for (let i = 0; i < 2000; i++) {
    first.push(1, 2, 3, 4, 5);
  }

  for (let i = 0; i < 1000; i++) {
    second.push(2, 1, 2, 3, 2, 4, 2, 5);
  }

  for (let i = 0; i < 1000; i++) {
    third.push(3, 3, 1, 1, 2, 2, 4, 4, 5, 5);
  }

  const length = answers.length;

  const newFirst = first.slice(0, length);
  const newSecond = second.slice(0, length);
  const newThird = third.slice(0, length);

  const firstCount = getCount(newFirst, answers, length);
  const secondCount = getCount(newSecond, answers, length);
  const thirdCount = getCount(newThird, answers, length);

  const max = Math.max(firstCount, secondCount, thirdCount);

  if (max === firstCount) answer.push(1);
  if (max === secondCount) answer.push(2);
  if (max === thirdCount) answer.push(3);

  return answer;
}

const getCount = (solves, answers, length) => {
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (answers[i] === solves[i]) count++;
  }

  return count;
};

// 해결 성공

// 1번수포자 : 1 2 3 4 5 (5개)
// 2번수포자 : 2 1 2 3 2 4 2 5 (10개)
// 3번수포자 : 33 11 22 44 55 (10개)

function solution(answers) {
  const answer = [];

  const solve = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  const scores = {
    1: 0,
    2: 0,
    3: 0,
  };

  for (let supo = 1; supo <= 3; supo++) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === solve[supo][i % solve[supo].length]) scores[supo]++;
    }
  }

  const max = Math.max(scores[1], scores[2], scores[3]);

  for (let i = 1; i <= 3; i++) {
    if (max === scores[i]) answer.push(i);
  }

  return answer;
}
