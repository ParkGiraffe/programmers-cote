// 시간초과
function _solution(brown, yellow) {
  const size = brown + yellow;

  const divisors = [];
  getDivisors(size, divisors);

  for (let div of divisors) {
    if (isValid(...div, brown, yellow)) return div;
  }
}


const _getDivisors = (size, divisors) => {
  for (let i = 1; i <= size; i++) {
    for (let j = i; j <= size; j++) {
      if (i * j === size) divisors.push([j, i]);
    }
  }
};

const _isValid = (w, h, brown, yellow) => {
  if (2 * w + 2 * h - 4 === brown && (w - 2) * (h - 2) === yellow) return true;
  else return false;
};

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
