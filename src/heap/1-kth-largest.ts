import { PriorityQueue } from "@datastructures-js/priority-queue";

function getKthLargest(nums: Array<number>, k: number): number | undefined {
  const maxHeap = PriorityQueue.fromArray<number>(nums, (a, b) => {
    return b - a;
  });
  console.log(maxHeap.toArray());
  return maxHeap.toArray().at(k - 1);
}

console.log(getKthLargest([3, -2, 5, 0, -1, -5, 4], 4));
