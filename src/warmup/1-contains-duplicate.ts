var containsDuplicate = function(nums: number[]) {
  const unique = new Set(nums);
  return unique.size !== nums.length;
};

const nums1: number[] = [1, 2, 3, 4];
console.log(containsDuplicate(nums1)); // Expected output: false

const nums2: number[] = [1, 2, 3, 1];
console.log(containsDuplicate(nums2)); // Expected output: true

const nums3: number[] = [];
console.log(containsDuplicate(nums3)); // Expected output: false

const nums4: number[] = [1, 1, 1, 1];
console.log(containsDuplicate(nums4)); // Expected output: true
