// 시간초과

function solution(people, limit) {
  const amounts = [];

  func(people, limit, amounts, []);

  return Math.min(...amounts);
}

const func = (people, limit, amounts, boats) => {
  if (people.length === 0) amounts.push(boats.length);

  for (let i = 0; i < people.length; i++) {
    const newPeople = [...people];
    newPeople.splice(i, 1);

    for (let j = 0; j < boats.length; j++) {
      if (boats[j] + people[i] <= limit) {
        const newBoats = [...boats];
        newBoats[j] += people[i];
        func(newPeople, limit, amounts, newBoats);
      }
    }

    const newBoats = [...boats, people[i]];
    func(newPeople, limit, amounts, newBoats);
  }
};

// 해결
function solution(people, limit) {
  people.sort((a, b) => b - a);

  let count = 0;

  let j = people.length - 1;
  let i = 0;

  while (i <= j) {
    const max = people[i];
    const min = people[j];
    // console.log(max, min)
    if (max + min <= limit) {
      i++;
      j--;
      count++;
    } else {
      i++;
      count++;
    }
  }

  return count;
}
