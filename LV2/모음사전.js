function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const weights = [781, 156, 31, 6, 1];
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    const n = vowels.indexOf(word[i]);
    count += n * weights[i] + 1;
  }

  return count;
}
