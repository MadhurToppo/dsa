import { PriorityQueue } from "@datastructures-js/priority-queue";

function getKthSmallest(nums: Array<number>, k: number): number | undefined {
  const minHeap = PriorityQueue.fromArray<number>(nums, (a, b) => {
    return a - b;
  });
  return minHeap.toArray().at(k - 1);
}

console.log(getKthSmallest([3, -2, 5, 0, -1, -5, 4], 3));
