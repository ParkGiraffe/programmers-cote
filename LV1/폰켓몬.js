function solution(nums) {
  const map = createMap(nums);

  // return map;
  return getCount(map.length, nums.length / 2);
}

function createMap(arr) {
  const map = [];

  arr.forEach((e) => {
    if (!map.find((el) => el === e)) map.push(e);
  });

  return map;
}

function getCount(mapLength, half) {
  if (mapLength > half) {
    return half;
  } else {
    return mapLength;
  }
}
