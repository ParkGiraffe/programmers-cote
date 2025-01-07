function solution(progresses, speeds) {
  const answer = [];
  while (progresses.length) {
    while (progresses[0] < 100) {
      speeds.forEach((e, idx) => {
        progresses[idx] += e;
      });
    }

    let count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    answer.push(count);
  }

  return answer;
}
