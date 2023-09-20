export function mySqrt(x: number): number {
  if (x < 2) {
    return x;
  }

  let left = 2;
  let right = Math.floor(x / 2);
  let pivot;
  let num;

  while (left <= right) {
    pivot = Math.floor(left + (right - left) / 2);
    num = pivot * pivot;
    if (num > x) {
      right = pivot - 1;
    } else if (num < x) {
      left = pivot + 1;
    } else {
      return pivot;
    }
  }

  return right;
}
