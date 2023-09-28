export function longestSubstringWithKDistinct(str: string, k: number) {
  if (k === 0) {
    return;
  }
  const arr = str.split("");
  let left = 0;
  let right = 0;

  const hm = new Map();
  let max = 0;

  while (right < arr.length) {
    const count = hm.get(arr[right]) === undefined ? 0 : hm.get(arr[right]);
    hm.set(arr[right], count + 1);

    while (hm.size > k) {
      hm.set(arr[left], hm.get(arr[left]) - 1);
      if (hm.get(arr[left]) === 0) {
        hm.delete(arr[left]);
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
}

console.log(
  `Length of the longest substring: ` +
    longestSubstringWithKDistinct("araaci", 2),
);
console.log(
  `Length of the longest substring: ` +
    longestSubstringWithKDistinct("araaci", 1),
);
console.log(
  `Length of the longest substring: ` +
    longestSubstringWithKDistinct("cbbebi", 3),
);
