function containsDuplicate(nums: Array<number>): boolean {
  const unique: Set<number> = new Set(nums);
  return unique.size !== nums.length;
}

const nums1: Array<number> = [1, 2, 3, 4];
console.log(containsDuplicate(nums1)); // Expected output: false

const nums2: Array<number> = [1, 2, 3, 1];
console.log(containsDuplicate(nums2)); // Expected output: true

const nums3: Array<number> = [];
console.log(containsDuplicate(nums3)); // Expected output: false

const nums4: Array<number> = [1, 1, 1, 1];
console.log(containsDuplicate(nums4)); // Expected output: true
