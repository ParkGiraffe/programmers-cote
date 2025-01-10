function solution(m, n, puddles) {
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  const MOD = 1000000007;

  // 물웅덩이 표시
  const puddleSet = new Set(puddles.map(([x, y]) => `${y},${x}`));

  dp[1][1] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;
      if (puddleSet.has(`${i},${j}`)) continue;
      else {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
      }
    }
  }
  return dp[n][m];
}
