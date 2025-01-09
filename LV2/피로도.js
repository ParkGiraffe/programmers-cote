function solution(k, dungeons) {
  let max = 0;
  const visited = new Array(dungeons.length).fill(false);

  const recursive = (lastP, count) => {
    for (let i = 0; i < dungeons.length; i++) {
      let [a, b] = dungeons[i];

      if (lastP >= a && !visited[i]) {
        visited[i] = true;
        recursive(lastP - b, count + 1);
        visited[i] = false;
      } else {
        max = Math.max(max, count);
      }
    }
  };

  recursive(k, 0);

  return max;
}
