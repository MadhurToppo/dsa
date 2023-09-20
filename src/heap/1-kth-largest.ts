import { PriorityQueue } from "@datastructures-js/priority-queue";

export function getKthLargest(
  nums: Array<number>,
  k: number,
): number | undefined {
  const maxHeap = PriorityQueue.fromArray<number>(nums, (a, b) => {
    return b - a;
  });
  return maxHeap.toArray().at(k - 1);
}
