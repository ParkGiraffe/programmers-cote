function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const result = [];

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const queue = [];
  const visited = Array.from({ length: rows }, () =>
    new Array(cols).fill(false)
  );

  const bfs = (y, x) => {
    queue.push([y, x]);
    visited[y][x] = true;

    let sum = Number(maps[y][x]);

    while (queue.length) {
      const [curY, curX] = queue.shift();

      for (const [dy, dx] of directions) {
        let newY = curY + dy;
        let newX = curX + dx;

        if (
          newY < rows &&
          newX < cols &&
          newY >= 0 &&
          newX >= 0 &&
          maps[newY][newX] != "X" &&
          !visited[newY][newX]
        ) {
          queue.push([newY, newX]);
          visited[newY][newX] = true;
          sum += Number(maps[newY][newX]);
        }
      }
    }

    return sum;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j] && maps[i][j] != "X") {
        result.push(bfs(i, j));
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
