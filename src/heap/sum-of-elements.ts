import { PriorityQueue } from "@datastructures-js/priority-queue";

function sumOfelements(nums: Array<number>, k1: number, k2: number): number {
  const minHeap = PriorityQueue.fromArray<number>(nums, (a, b) => {
    return a - b;
  });
  const elements = minHeap.toArray().slice(k1, k2 - 1);
  let sum = 0;
  elements.forEach((element) => {
    sum += element;
    return sum;
  });
  return sum;
}

console.log(sumOfelements([3, 5, 8, 7], 1, 4));
console.log(sumOfelements([1, 3, 12, 5, 15, 11], 3, 6));
