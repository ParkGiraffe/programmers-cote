function solution(triangle) {
  const dp = [[triangle[0][0]]];
  console.log(triangle);
  for (let i = 1; i < triangle.length; i++) {
    dp.push(new Array(i + 1).fill(0));
    for (let j = 0; j < dp[i].length; j++) {
      const curNode = triangle[i][j];
      const leftParent = dp[i - 1][j - 1];
      const rightParent = dp[i - 1][j];

      if (leftParent && rightParent) {
        dp[i][j] = Math.max(leftParent + curNode, rightParent + curNode);
      } else if (leftParent) {
        dp[i][j] = leftParent + curNode;
      } else if (rightParent) {
        dp[i][j] = rightParent + curNode;
      }
    }
  }

  return Math.max(...dp.at(-1));
}
