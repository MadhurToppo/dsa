export function smallestSubarraySum(s: number, arr: number[]) {
  let min = Infinity;
  let sum = 0;
  let start = 0;
  let end = 0;

  while (end < arr.length) {
    sum += arr[end];
    while (sum >= s) {
      min = Math.min(min, end - start + 1);
      sum -= arr[start];
      start++;
    }
    end++;
  }

  return min === Infinity ? 0 : min;
}

console.log(
  `Smallest subarray length: ` + smallestSubarraySum(7, [2, 1, 5, 2, 3, 2]),
);
console.log(
  `Smallest subarray length: ` + smallestSubarraySum(7, [2, 1, 5, 2, 8]),
);
console.log(
  `Smallest subarray length: ` + smallestSubarraySum(8, [3, 4, 1, 1, 6]),
);
