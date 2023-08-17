function getTwoSum(nums: Array<number>, target: number): Array<number> {
  let left: number = 0;
  let right: number = nums.length;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}

console.log(getTwoSum([1, 2, 3, 4, 6], 6));
console.log(getTwoSum([2, 5, 9, 11], 11));
