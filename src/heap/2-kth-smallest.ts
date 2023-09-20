import { PriorityQueue } from "@datastructures-js/priority-queue";

export function getKthSmallest(
  nums: Array<number>,
  k: number,
): number | undefined {
  const minHeap = PriorityQueue.fromArray<number>(nums, (a, b) => {
    return a - b;
  });
  return minHeap.toArray().at(k - 1);
}
