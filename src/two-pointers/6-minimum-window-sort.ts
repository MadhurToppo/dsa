export function shortest_window_sort(arr: number[]) {
  let low = 0;
  let high = arr.length - 1;
  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low += 1;
  }

  if (low === arr.length - 1) {
    return 0;
  }

  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  let subarrayMax = -Infinity;
  let subarrayMin = Infinity;
  for (let k = low; k < high + 1; k++) {
    subarrayMax = Math.max(subarrayMax, arr[k]);
    subarrayMin = Math.min(subarrayMin, arr[k]);
  }

  while (low > 0 && arr[low - 1] > subarrayMin) {
    low -= 1;
  }
  while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
    high += 1;
  }

  return high - low + 1;
}
