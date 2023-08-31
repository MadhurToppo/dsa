import { PriorityQueue } from "@datastructures-js/priority-queue";

function topKLargestNumbers(nums: Array<number>, k: number): Array<number> {
  const maxHeap = PriorityQueue.fromArray<number>(nums, (a, b) => {
    return b - a;
  });
  return maxHeap.toArray().slice(0, k);
}

console.log(topKLargestNumbers([3, -2, 5, 0, -1, -5, 4], 4));
