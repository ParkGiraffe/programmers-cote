function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const wordLength = begin.length;
  const set = new Set();
  let minCount = Infinity;

  const canTrans = (word1, word2) => {
    let diffCount = 0;

    for (let i = 0; i < wordLength; i++) {
      if (word1[i] != word2[i]) diffCount++;
      if (diffCount > 1) return false;
    }

    return diffCount == 1;
  };

  const dfs = (curStr, checkCount) => {
    if (curStr == target) minCount = Math.min(minCount, checkCount);

    for (const word of words) {
      if (canTrans(curStr, word) && !set.has(word)) {
        set.add(word);
        dfs(word, checkCount + 1);
        set.delete(word);
      }
    }
  };

  dfs(begin, 0);

  return minCount;
}
