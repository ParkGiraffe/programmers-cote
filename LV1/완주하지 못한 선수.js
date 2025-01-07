// 효율성 테스트 실패
function solution(participant, completion) {
  let length = completion.length;

  for (let i = 0; i < length; i++) {
    let cur = completion[i];
    let idx = participant.findIndex((e) => e === cur);
    participant[idx] = "";
  }

  return participant.join("");
}

// 효율성 테스트 성공
function solution(participant, completion) {
  const map = new Map();

  participant.forEach((e) => {
    if (map.has(e)) {
      let cur = map.get(e);
      map.delete(e);
      map.set(e, cur + 1);
    } else {
      map.set(e, 1);
    }
  });

  completion.forEach((e) => {
    let cur = map.get(e);
    if (cur <= 1) map.delete(e);
    else {
      map.delete(e);
      map.set(e, cur - 1);
    }
  });

  for (key of map.keys()) {
    return key;
  }
}
