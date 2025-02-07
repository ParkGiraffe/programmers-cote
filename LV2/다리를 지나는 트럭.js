function solution(bridge_length, weight, truck_weights) {
  const queue = [];
  const goalCount = truck_weights.length;
  let finishedCount = 0;

  let firstTruck = truck_weights.shift();
  let onBridgeWeight = firstTruck;
  let onBridgeCount = 1;
  let curTime = 1;

  queue.push([firstTruck, curTime + bridge_length]); // [무게, 종료시간]

  while (goalCount != finishedCount) {
    curTime++;

    if (queue[0] && queue[0][1] == curTime) {
      const [curWeight, _] = queue.shift();
      onBridgeCount--;
      onBridgeWeight -= curWeight;
      finishedCount++;
    }

    if (
      truck_weights[0] + onBridgeWeight <= weight &&
      onBridgeCount < bridge_length
    ) {
      const curTruck = truck_weights.shift();
      queue.push([curTruck, curTime + bridge_length]);
      onBridgeCount++;
      onBridgeWeight += curTruck;
    }
  }

  return curTime;
}
