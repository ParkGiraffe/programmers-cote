function solution(clothes) {
  const clothesMap = new Map();

  clothes.forEach((e) => {
    const [wear, type] = e;

    if (clothesMap.has(type)) {
      const temp = clothesMap.get(type);
      clothesMap.delete(type);
      clothesMap.set(type, [...temp, wear]);
    } else {
      clothesMap.set(type, [wear]);
    }
  });

  const counts = [];
  clothesMap.forEach((e) => counts.push(e.length + 1));
  console.log(counts);

  const answer = counts.reduce((acc, cur) => acc * cur) - 1;
  return answer;
}

// 성공
function solution(brown, yellow) {
  const size = brown + yellow;

  const divisors = [];
  getDivisors(size, divisors);

  for (let div of divisors) {
    if (isValid(...div, brown, yellow)) return div;
  }
}

const getDivisors = (size, divisors) => {
  for (let i = 1; i <= Math.sqrt(size); i++) {
    if (size % i === 0) {
      let h = i;
      let w = size / i;
      divisors.push([w, h]);
    }
  }
};

const isValid = (w, h, brown, yellow) => {
  if (2 * w + 2 * h - 4 === brown && (w - 2) * (h - 2) === yellow) return true;
  else return false;
};
