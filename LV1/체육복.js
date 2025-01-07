function solution(n, lost, reserve) {
  const students = new Array(n).fill(1);

  lost.forEach((e) => {
    students[e - 1] = 0;
  });

  reserve.forEach((e) => {
    students[e - 1]++;
  });

  students.forEach((e, idx) => {
    if (e === 0) {
      if (students[idx - 1] === 2) {
        students[idx - 1]--;
        students[idx]++;
      } else if (students[idx + 1] === 2) {
        students[idx + 1]--;
        students[idx]++;
      }
    }
  });

  let answer = 0;
  students.forEach((e) => {
    if (e !== 0) answer++;
  });

  return answer;
}
