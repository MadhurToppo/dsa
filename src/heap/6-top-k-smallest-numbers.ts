import { PriorityQueue } from "@datastructures-js/priority-queue";

export function topKSmallestNumbers(
  nums: Array<number>,
  k: number,
): Array<number> {
  const minHeap = PriorityQueue.fromArray<number>(nums, (a, b) => {
    return a - b;
  });
  return minHeap.toArray().slice(0, k);
}
