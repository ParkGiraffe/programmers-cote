function solution(name) {
  const n = name.length;
  let minMoves = n - 1;
  let moves = 0;

  for (let cs = 0; cs < n; cs++) {
    moves += calc(name[cs]);

    let next = cs + 1;
    while (next < n && name[next] === "A") {
      next++;
    }

    if (next > cs + 1) {
      // 오른쪽으로 진행 중 왼쪽으로 돌아가면 얼마나 걸리는지
      const distanceToLeftEnd = cs * 2 + n - next;
      // 왼쪽으로 진행 중 오른쪽으로 돌아가면 얼마나 걸리는지
      const distanceToRightEnd = (n - next) * 2 + cs;
      minMoves = Math.min(minMoves, distanceToLeftEnd, distanceToRightEnd);
    }
  }

  return moves + minMoves;
}

function calc(c) {
  return Math.min(
    c.charCodeAt(0) - "A".charCodeAt(0),
    "Z".charCodeAt(0) - c.charCodeAt(0) + 1
  );
}
