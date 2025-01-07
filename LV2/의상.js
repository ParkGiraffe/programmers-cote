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
