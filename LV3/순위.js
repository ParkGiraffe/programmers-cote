function solution(n, results) {
  const win = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(false));

  results.forEach(([a, b]) => {
    win[a][b] = true;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (win[i][k] && win[k][j]) {
          win[i][j] = true;
        }
      }
    }
  }

  let result = 0;

  for (let i = 1; i <= n; i++) {
    let check = 0;

    for (let j = 1; j <= n; j++) {
      if (win[i][j] || win[j][i]) check++;
    }

    if (check == n - 1) result++;
  }

  return result;
}
