import { PriorityQueue } from "@datastructures-js/priority-queue";

function topKSmallestNumbers(nums: Array<number>, k: number): Array<number> {
  const minHeap = PriorityQueue.fromArray<number>(nums, (a, b) => {
    return a - b;
  });
  return minHeap.toArray().slice(0, k);
}

console.log(topKSmallestNumbers([3, -2, 5, 0, -1, -5, 4], 3));
