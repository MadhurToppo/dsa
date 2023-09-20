export function containsDuplicate(nums: Array<number>): boolean {
  const unique: Set<number> = new Set(nums);
  return unique.size !== nums.length;
}
