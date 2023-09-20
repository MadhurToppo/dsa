import { expect } from "chai";
import { getKthLargest } from "heap/1-kth-largest";
import { getKthSmallest } from "heap/2-kth-smallest";
import { sumOfelements } from "heap/3-sum-of-elements";
import { topKFrequentNumbers } from "heap/4-top-k-frequent-numbers";
import { topKLargestNumbers } from "heap/5-top-k-largest-numbers";
import { topKSmallestNumbers } from "heap/6-top-k-smallest-numbers";

describe("Heap tests", function () {
  context("kth largest element", function () {
    it("should get the kth largest number in an array", function () {
      expect(getKthLargest([3, -2, 5, 0, -1, -5, 4], 4)).to.equal(0);
    });
  });
  context("kth smallest element", function () {
    it("should get the kth smallest number in an array", function () {
      expect(getKthSmallest([3, -2, 5, 0, -1, -5, 4], 3)).to.equal(-1);
    });
  });
  context("sum of elements", function () {
    it("should get the sum of 2 kth smallest numbers", function () {
      expect(sumOfelements([3, 5, 8, 7], 1, 4)).to.equal(12);
      expect(sumOfelements([1, 3, 12, 5, 15, 11], 3, 6)).to.equal(23);
    });
  });
  context("top k frequent numbers", function () {
    it("should get top k frequent numbers", function () {
      expect(topKFrequentNumbers([1, 3, 5, 12, 11, 12, 11], 2)).to.deep.equal([
        12, 11,
      ]);
      expect(
        topKFrequentNumbers([1, 3, 5, 12, 11, 12, 11, -3, -3, -3, -3], 2),
      ).to.deep.equal([-3, 12]);
    });
  });
  context("top k largest numbers", function () {
    it("should get top k largest numbers", function () {
      expect(topKLargestNumbers([3, -2, 5, 0, -1, -5, 4], 4)).to.deep.equal([
        5, 4, 3, 0,
      ]);
    });
  });
  context("top k smallest numbers", function () {
    it("should get top k smallest numbers", function () {
      expect(topKSmallestNumbers([3, -2, 5, 0, -1, -5, 4], 3)).to.deep.equal([
        -5, -2, -1,
      ]);
    });
  });
});
