const isPalindrome = (str: string) => {
  let left = 0;
  let right = str.length - 1;
  const characters =
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
};

// Test cases
// Test case 1: "A man, a plan, a canal, Panama!"
// Expected output: true
console.log(isPalindrome("A man, a plan, a canal, Panama!"));

// Test case 2: "race a car"
// Expected output: false
console.log(isPalindrome("race a car"));

// Test case 3: "Was it a car or a cat I saw?"
// Expected output: true
console.log(isPalindrome("Was it a car or a cat I saw?"));

// Test case 4: "Madam, in Eden, I'm Adam."
// Expected output: true
console.log(isPalindrome("Madam, in Eden, I'm Adam."));

// Test case 5: "empty string"
// Expected output: true
console.log(isPalindrome(""));