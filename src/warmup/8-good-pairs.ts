export function numGoodPairs(nums: Array<number>): number {
  let pairCount = 0;
  let map: { [number: number]: number } = {};
  for (let n of nums) {
    map[n] = (map[n] || 0) + 1;
    pairCount += map[n] - 1;
  }
  return pairCount;
}
