const numGoodPairs = function (nums) {
  let pairCount = 0;
  let map = {};
  for (let n of nums) {
    map[n] = (map[n] || 0) + 1;
    pairCount += map[n] - 1;
  }
  return pairCount;
};

let nums1 = [1, 2, 3, 1, 1, 3];
let result1 = numGoodPairs(nums1);
console.log(`Result 1: ${result1} (Expected: 4)`);

let nums2 = [1, 1, 1, 1];
let result2 = numGoodPairs(nums2);
console.log(`Result 2: ${result2} (Expected: 6)`);

let nums3 = [1, 2, 3];
let result3 = numGoodPairs(nums3);
console.log(`Result 3: ${result3} (Expected: 0)`);

let nums4 = [3, 2, 1, 0];
let result4 = numGoodPairs(nums4);
console.log(`Result 4: ${result4} (Expected: 0)`);
