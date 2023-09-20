import { PriorityQueue } from "@datastructures-js/priority-queue";

export function sumOfelements(
  nums: Array<number>,
  k1: number,
  k2: number,
): number {
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
