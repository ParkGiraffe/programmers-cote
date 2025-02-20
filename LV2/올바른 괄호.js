function solution(s) {
  let queue = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") queue++;
    else {
      if (queue > 0) queue--;
      else return false;
    }
  }

  if (queue > 0) return false;

  return true;
}
