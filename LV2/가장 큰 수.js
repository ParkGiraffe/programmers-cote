function solution(numbers) {
  const str_numbers = numbers.map(String);
  console.log(str_numbers);
  str_numbers.sort((a, b) => {
    return Number(b + a) - Number(a + b);
  });

  if (str_numbers.reduce((acc, cur) => acc + +cur) == 0) return "0";
  // if (str_numbers.join('') == 0) return '0'
  else return str_numbers.join("");
}
