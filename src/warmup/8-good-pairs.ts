const numGoodPairs = (nums: Array<number>): number => {
  let pairCount = 0;
  let map: { [number: number]: number } = {};
  for (let n of nums) {
    map[n] = (map[n] || 0) + 1;
    pairCount += map[n] - 1;
  }
  return pairCount;
};

let result1 = numGoodPairs([1, 2, 3, 1, 1, 3]);
console.log(`Result 1: ${result1} (Expected: 4)`);

let result2 = numGoodPairs([1, 1, 1, 1]);
console.log(`Result 2: ${result2} (Expected: 6)`);

let result3 = numGoodPairs([1, 2, 3]);
console.log(`Result 3: ${result3} (Expected: 0)`);

let result4 = numGoodPairs([3, 2, 1, 0]);
console.log(`Result 4: ${result4} (Expected: 0)`);
