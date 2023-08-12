const mySqrt = (x: number): number => {
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
};

// test cases
console.log(mySqrt(4)); // expected output: 2
console.log(mySqrt(8)); // expected output: 2
console.log(mySqrt(2)); // expected output: 1
console.log(mySqrt(3)); // expected output: 1
console.log(mySqrt(15)); // expected output: 3
