export function longestSubstringWithAllDistinct(str: string) {
  const arr = str.split("");
  const n = arr.length;
  if (n < 3) {
    return n;
  }

  let left = 0;
  let right = 0;

  const hm = new Map();
  let max = 0;

  while (right < n) {
    const count = hm.get(arr[right]) === undefined ? 0 : hm.get(arr[right]);
    hm.set(arr[right], count + 1);

    while (hm.size > 2) {
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
    longestSubstringWithAllDistinct("araaci"),
);
console.log(
  `Length of the longest substring: ` +
    longestSubstringWithAllDistinct("ABCDEFGABEF"),
);
console.log(
  `Length of the longest substring: ` +
    longestSubstringWithAllDistinct("GEEKSFORRGKS"),
);
