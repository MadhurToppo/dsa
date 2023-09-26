export function maxSubarrayOfSizeK(arr: number[], k: number): number {
  let max = -Infinity;
  let sum = 0;
  let start = 0;
  let end = 0;

  while (end < arr.length) {
    sum += arr[end];
    if (end >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[start];
      start++;
    }
    end++;
  }
  return max;
}

console.log(
  `Maximum sum of a subarray of size K: ${maxSubarrayOfSizeK(
    [2, 1, 5, 1, 3, 2],
    3,
  )}`,
);
console.log(
  `Maximum sum of a subarray of size K: ${maxSubarrayOfSizeK(
    [2, 3, 4, 1, 5],
    2,
  )}`,
);
