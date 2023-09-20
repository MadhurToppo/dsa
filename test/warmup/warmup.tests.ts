import { expect } from "chai";
import { containsDuplicate } from "warmup/1-contains-duplicate";
import { isPangram } from "warmup/2-pangram";
import { mySqrt } from "warmup/3-sqrt";
import { reverseVowels } from "warmup/4-reverse-vowels";
import { isPalindrome } from "warmup/5-valid-palindrome";
import { isAnagram } from "warmup/6-valid-anagram";
import { shortestDistance } from "warmup/7-shortest-word-distance";
import { numGoodPairs } from "warmup/8-good-pairs";

describe("Warmup tests", function () {
  context("contains duplicate", function () {
    it("should find if array contains duplicates", function () {
      expect(containsDuplicate([1, 2, 3, 4])).to.equal(false);
      expect(containsDuplicate([1, 2, 3, 1])).to.equal(true);
      expect(containsDuplicate([])).to.equal(false);
      expect(containsDuplicate([1, 1, 1, 1])).to.equal(true);
    });
  });
  context("pangram", function () {
    it("should find if string is a pangram", function () {
      expect(isPangram("TheQuickBrownFoxJumpsOverTheLazyDog")).to.equal(true);
      expect(isPangram("This is not a pangram")).to.equal(false);
      expect(isPangram("abcdef ghijkl mnopqr stuvwxyz")).to.equal(true);
      expect(isPangram("")).to.equal(false);
    });
  });
  context("sqrt", function () {
    it("should find square root of a number to nearest integer", function () {
      expect(mySqrt(4)).to.equal(2);
      expect(mySqrt(8)).to.equal(2);
      expect(mySqrt(2)).to.equal(1);
      expect(mySqrt(3)).to.equal(1);
      expect(mySqrt(15)).to.equal(3);
    });
  });
  context("reverse vowels", function () {
    it("should reverse the order of vowels in string", function () {
      expect(reverseVowels("hello")).to.equal("holle");
      expect(reverseVowels("DesignGUrus")).to.equal("DusUgnGires");
      expect(reverseVowels("AEIOU")).to.equal("UOIEA");
      expect(reverseVowels("aA")).to.equal("Aa");
      expect(reverseVowels("")).to.equal("");
    });
  });
  context("valid palindrome", function () {
    it("should find if string is a valid palindrome", function () {
      expect(isPalindrome("A man, a plan, a canal, Panama!")).to.equal(true);
      expect(isPalindrome("race a car")).to.equal(false);
      expect(isPalindrome("Was it a car or a cat I saw?")).to.equal(true);
      expect(isPalindrome("Was it a car or a cat I saw?")).to.equal(true);
      expect(isPalindrome("")).to.equal(true);
    });
  });
  context("valid anagram", function () {
    it("should find if string is a valid anagram", function () {
      expect(isAnagram("listen", "silent")).to.equal(true);
      expect(isAnagram("hello", "world")).to.equal(false);
      expect(isAnagram("anagram", "nagrama")).to.equal(true);
      expect(isAnagram("rat", "car")).to.equal(false);
      expect(isAnagram("", "")).to.equal(true);
    });
  });
  context("shortest word distance", function () {
    it("should find shortest distance between 2 words in an array", function () {
      expect(
        shortestDistance(
          [
            "the",
            "quick",
            "brown",
            "fox",
            "jumps",
            "over",
            "the",
            "lazy",
            "dog",
          ],
          "fox",
          "dog",
        ),
      ).to.equal(5);
      expect(
        shortestDistance(["a", "b", "c", "d", "a", "b"], "a", "b"),
      ).to.equal(1);
      expect(shortestDistance(["a", "c", "d", "b", "a"], "a", "b")).to.equal(1);
      expect(shortestDistance(["a", "b", "c", "d", "e"], "a", "e")).to.equal(4);
    });
  });
  context("good pairs", function () {
    it("should find number of pairs in an array", function () {
      expect(numGoodPairs([1, 2, 3, 1, 1, 3])).to.equal(4);
      expect(numGoodPairs([1, 1, 1, 1])).to.equal(6);
      expect(numGoodPairs([1, 2, 3])).to.equal(0);
      expect(numGoodPairs([3, 2, 1, 0])).to.equal(0);
    });
  });
});
