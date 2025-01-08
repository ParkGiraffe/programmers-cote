// dfs로는 실패
function solution(maps) {
  const n = maps[0].length;
  const m = maps.length;
  const checks = Array.from({ length: m }, () => Array(n).fill(0));

  let minCount = Infinity; // 최단 경로 저장용 변수

  const dfs = (x, y, count) => {
    // 도착지에 도달한 경우 최단 경로 갱신
    if (x === m && y === n) {
      minCount = Math.min(minCount, count);
      return;
    }

    // 네 방향 탐색: 위, 아래, 오른쪽, 왼쪽
    const directions = [
      [0, 1], // 위
      [0, -1], // 아래
      [1, 0], // 오른쪽
      [-1, 0], // 왼쪽
    ];

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 이동 가능 여부 확인 (범위 내, 방문하지 않음, 벽이 아님)
      if (
        nx >= 0 &&
        nx < m &&
        ny >= 0 &&
        ny < n &&
        maps[nx][ny] === 1 &&
        !checks[nx][ny]
      ) {
        // 방문 처리
        checks[nx][ny] = 1;

        // 다음 위치로 재귀 호출
        dfs(nx, ny, count + 1);

        // 방문 복원 (백트래킹)
        checks[nx][ny] = 0;
      }
    }
  };

  dfs(0, 0, 0);
  console.log(minCount);
  // return Math.min(...maps);
}

/**
checks : 이미 이동한 지 여부를 확인하는 2차원 배열
x : 현재 x
y : 현재 y
n : 목표 x
m : 목표 y
count : 이동수
arr : 도착에 성공한 경우의 수
*/

// Bfs로 성공
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const checks = Array.from({ length: n }, () => Array(m).fill(0));

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  checks[0][0] = 1;
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (x === m - 1 && y === n - 1) return count;

    for (let [dx, dy] of directions) {
      let newX = x + dx;
      let newY = y + dy;

      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < m &&
        newY < n &&
        maps[newY][newX] == 1 &&
        checks[newY][newX] == 0
      ) {
        queue.push([newX, newY, count + 1]);
        checks[newY][newX] = 1;
      }
    }
  }

  return -1;
}
