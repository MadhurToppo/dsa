import { expect } from "chai";
import { getTwoSum } from "two-pointers/1-two-sum";
import { remove_duplicates } from "two-pointers/2-remove-duplicates";
import { make_squares } from "two-pointers/3-squaring-a-sorted-array";
import { threeSum } from "two-pointers/4-three-sum";
import { dutch_flag_sort } from "two-pointers/5-dutch-national-flag";
import { shortest_window_sort } from "two-pointers/6-minimum-window-sort";

describe("Two pointer tests", function () {
  context("two sum", function () {
    it("should get indices of numbers adding upto the sum", function () {
      expect(getTwoSum([1, 2, 3, 4, 6], 6)).to.deep.equal([1, 3]);
      expect(getTwoSum([2, 5, 9, 11], 11)).to.deep.equal([0, 2]);
    });
  });
  context("remove duplicates", function () {
    it("should return number of unique elements", function () {
      expect(remove_duplicates([2, 3, 3, 3, 6, 9, 9])).to.equal(4);
      expect(remove_duplicates([2, 2, 2, 11])).to.equal(2);
    });
  });
  context("squaring a sorted array", function () {
    it("should return squared elements in a sorted array", function () {
      expect(make_squares([-2, -1, 0, 2, 3])).to.deep.equal([0, 1, 4, 4, 9]);
      expect(remove_duplicates([2, 2, 2, 11])).to.equal(2);
    });
  });
  context("three sum", function () {
    it("should get indices of 3 numbers adding upto 0", function () {
      expect(threeSum([-3, 0, 1, 2, -1, 1, -2])).to.deep.equal([
        [-3, 1, 2],
        [-2, 0, 2],
        [-2, 1, 1],
        [-1, 0, 1],
      ]);
      expect(threeSum([-5, 2, -1, -2, 3])).to.deep.equal([
        [-5, 2, 3],
        [-2, -1, 3],
      ]);
    });
  });
  context("dutch national flag", function () {
    it("should sort the array in 3 partitions", function () {
      expect(dutch_flag_sort([1, 0, 2, 1, 0])).to.deep.equal([0, 0, 1, 1, 2]);
      expect(dutch_flag_sort([2, 2, 0, 1, 2, 0])).to.deep.equal([
        0, 0, 1, 2, 2, 2,
      ]);
    });
  });
  context("minimum window sort", function () {
    it("should find length of minimum window to be sorted for sorting entire array", function () {
      expect(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12])).to.equal(5);
      expect(shortest_window_sort([1, 3, 2, 0, -1, 7, 10])).to.equal(5);
      expect(shortest_window_sort([1, 2, 3])).to.equal(0);
      expect(shortest_window_sort([3, 2, 1])).to.equal(3);
    });
  });
});
