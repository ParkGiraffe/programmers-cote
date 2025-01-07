function solution(priorities, location) {
  let finishedCount = 0;
  const programCount = priorities.length;

  let pointer = 0;

  while (finishedCount !== programCount) {
    const max = Math.max(...priorities);
    // console.log(max)

    while (priorities[pointer] !== max) {
      pointer++;

      if (pointer > programCount) pointer = 0;
    }

    finishedCount++;
    priorities[pointer] = 0;
    if (pointer === location) return finishedCount;

    pointer++;
    if (pointer > programCount) pointer = 0;
  }
}
