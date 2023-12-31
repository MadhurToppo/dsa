import { PriorityQueue } from "@datastructures-js/priority-queue";

export function topKFrequentNumbers(
  nums: Array<number>,
  k: number,
): Array<number> {
  const map = nums.reduce((freq, num) => {
    return freq.set(num, (freq.get(num) || 0) + 1);
  }, new Map<number, number>());

  const maxHeap = PriorityQueue.fromArray<number>(
    Array.from(map.keys()),
    (a, b) => {
      return map.get(b)! - map.get(a)!;
    },
  );
  return maxHeap.toArray().slice(0, k);
}
