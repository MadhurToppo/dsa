export function isPalindrome(str: string): boolean {
  let left: number = 0;
  let right: number = str.length - 1;
  const characters: Array<string> =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

  while (left < right) {
    while (left < right && !characters.includes(str[left])) {
      left++;
    }
    while (left < right && !characters.includes(str[right])) {
      right--;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
