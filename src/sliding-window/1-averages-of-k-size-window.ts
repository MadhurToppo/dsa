export function averagesOfKSizeWindow(K: number, arr: number[]) {
  const result = [];
  let sum = 0;
  let start = 0;
  let end = 0;

  while (end < arr.length) {
    sum += arr[end];
    if (end >= K - 1) {
      result.push(sum / K);
      sum -= arr[start];
      start++;
    }
    end++;
  }

  return result;
}

const result = averagesOfKSizeWindow(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);
