function solution(jobs) {
  const queue = [];
  jobs.sort((a, b) => a[0] - b[0]);

  let curTime = 0;
  let cursor = 0;
  let total = 0;

  while (cursor < jobs.length || queue.length) {
    while (cursor < jobs.length && jobs[cursor][0] <= curTime) {
      queue.push(jobs[cursor]);
      cursor++;
    }

    queue.sort((a, b) => a[1] - b[1]);

    if (queue.length) {
      const [requestTime, duration] = queue.shift();
      curTime += duration;
      total += curTime - requestTime;
    } else {
      curTime = jobs[cursor][0];
    }
  }

  return Math.floor(total / jobs.length);
}
