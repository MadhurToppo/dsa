import { PriorityQueue } from "@datastructures-js/priority-queue";

export function topKLargestNumbers(
  nums: Array<number>,
  k: number,
): Array<number> {
  const maxHeap = PriorityQueue.fromArray<number>(nums, (a, b) => {
    return b - a;
  });
  return maxHeap.toArray().slice(0, k);
}
