class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 원소 추가
  push(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  // 최소값 제거 후 반환
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  // 최소값 반환 (삭제하지 않음)
  peek() {
    return this.heap[0];
  }

  // 현재 힙 크기 반환
  size() {
    return this.heap.length;
  }

  // 내부 함수: 삽입 후 힙 재구성
  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  // 내부 함수: 제거 후 힙 재구성
  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

function solution(scoville, k) {
  const heap = new MinHeap();
  scoville.forEach((e) => {
    heap.push(e);
  });

  let count = 0;

  while (heap.peek() < k && heap.size() !== 1) {
    const first = heap.pop();
    const second = heap.pop();
    heap.push(first + second * 2);
    count++;
  }

  if (heap.size() === 1 && heap.peek() < k) return -1;
  else return count;
}
