function solution(N, number) {
  if (N === number) return 1;

  const dp = Array.from({ length: 9 }, () => new Set());

  dp[1].add(N);

  for (let i = 2; i <= 8; i++) {
    dp[i].add(Number(`${N}`.repeat(i)));

    for (let j = 1; j < i; j++) {
      for (const a of dp[j]) {
        for (const b of dp[i - j]) {
          dp[i].add(a + b);
          dp[i].add(a - b);
          dp[i].add(a * b);
          if (b !== 0) dp[i].add(Math.floor(a / b));
        }
      }
    }

    if (dp[i].has(number)) return i;
  }

  return -1;

  // console.log(dp)
}
