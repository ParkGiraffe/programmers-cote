function solution(numbers) {
  const primes = [];

  for (let i = 1; i <= numbers.length; i++) {
    permute(numbers.split(""), i, "", primes);
  }

  const set = new Set(primes.map(Number));

  if (set.has(0)) {
    set.delete(0);
  }
  if (set.has(1)) {
    set.delete(1);
  }

  // console.log(set)
  return set.size;
}

const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

// const isPrime = (n) => {
//     if (n < 2) return false;

//     const arr = new Array(n + 1).fill(true);

//     for (let i = 2; i < Math.sqrt(n) + 1; i++) {
//         if (arr[i]) {
//             let j = 2;
//             while (i * j <= n) {
//                 arr[i * j++] = false;
//             }
//         }
//     }

//     return arr[n]
// }

const permute = (numArr, len, cur, primes) => {
  if (len === 0 && isPrime(+cur)) primes.push(cur);
  else {
    for (let i = 0; i < numArr.length; i++) {
      const nextCur = cur + numArr[i];
      const newNumArr = numArr.slice();
      newNumArr.splice(i, 1);
      permute(newNumArr, len - 1, nextCur, primes);
    }
  }
};
