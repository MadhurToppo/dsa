function dutch_flag_sort(nums: number[]): void {
  let p0 = 0,
    p2 = nums.length - 1,
    curr = 0;

  while (curr <= p2) {
    if (nums[curr] === 0) {
      swap(curr, p0, nums);
      curr++;
      p0++;
    } else if (nums[curr] === 2) {
      swap(curr, p2, nums);
      p2--;
    } else curr++;
  }
}

function swap(a: number, b: number, nums: number[]): void {
  if (a !== b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
}

let arr = [1, 0, 2, 1, 0];
dutch_flag_sort(arr);
console.log(arr);

arr = [2, 2, 0, 1, 2, 0];
dutch_flag_sort(arr);
console.log(arr);
