var isPangram = function (sentence) {
  let str = sentence.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (str.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }

  return true;
};
// Test case 1: "TheQuickBrownFoxJumpsOverTheLazyDog"
// Expected output: true
console.log(isPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));

// Test case 2: "This is not a pangram"
// Expected output: false
console.log(isPangram("This is not a pangram"));

// Test case 3: "abcdef ghijkl mnopqr stuvwxyz"
// Expected output: true
console.log(isPangram("abcdef ghijkl mnopqr stuvwxyz"));

// Test case 4: ""
// Expected output: false
console.log(isPangram(""));

// Test case 5: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Expected output: true
console.log(isPangram("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
