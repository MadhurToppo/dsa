const isAnagram = function(s: string, t: string) {
  if (s.length !== t.length) {
    return false;
  }

  let freqMap: { [char: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;
    freqMap[t[i]] = (freqMap[t[i]] || 0) - 1;
  }

  for (let char in freqMap) {
    if (freqMap[char] !== 0) {
      return false;
    }
  }
  return true;
};

// Test cases
// Test case 1
// var s1 = "listen";
// var t1 = "silent";
console.log(isAnagram("listen", "silent")); // Expected output: true

// Test case 2
// var s2 = "hello";
// var t2 = "world";
console.log(isAnagram("hello", "world")); // Expected output: false

// Test case 3
// var s3 = "anagram";
// var t3 = "nagaram";
console.log(isAnagram("anagram", "nagram")); // Expected output: true

// Test case 4
// var s4 = "rat";
// var t4 = "car";
console.log(isAnagram("rat", "car")); // Expected output: false

// Test case 5
// var s5 = "";
// var t5 = "";
console.log(isAnagram("", "")); // Expected output: true
