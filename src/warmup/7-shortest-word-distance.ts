const shortestDistance = function(
  words: string[],
  word1: string,
  word2: string,
) {
  let distance = words.length;
  let position1 = -1;
  let position2 = -1;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      position1 = i;
    } else if (words[i] === word2) {
      position2 = i;
    }
    if (position1 !== -1 && position2 !== -1) {
      distance = Math.min(distance, Math.abs(position1 - position2));
    }
  }
  return distance;
};

// Test Cases
// Test case 1
const words1 = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
const word11 = "fox";
const word21 = "dog";
console.log(shortestDistance(words1, word11, word21)); // 5

// Test case 2
const words2 = ["a", "b", "c", "d", "a", "b"];
const word12 = "a";
const word22 = "b";
console.log(shortestDistance(words2, word12, word22)); // 1

// Test case 3
const words3 = ["a", "c", "d", "b", "a"];
const word13 = "a";
const word23 = "b";
console.log(shortestDistance(words3, word13, word23)); // 1

// Test case 4
const words4 = ["a", "b", "c", "d", "e"];
const word14 = "a";
const word24 = "e";
console.log(shortestDistance(words4, word14, word24)); // 4
