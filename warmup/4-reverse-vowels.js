  vowels = "aeiouAEIOU";

  const reverseVowels(s) {
    // initialize pointers for start and end of the string
    let first = 0;
    let last = s.length - 1;
    let array = s.split("");

    while (first < last) {
      // increment the start pointer until a vowel is found
      while (first < last && this.vowels.indexOf(array[first]) === -1) {
        first++;
      }
      // decrement the end pointer until a vowel is found
      while (first < last && this.vowels.indexOf(array[last]) === -1) {
        last--;
      }
      // swap the values of first and last if both are vowels
      [array[first], array[last]] = [array[last], array[first]];
      // move the pointers towards the center
      first++;
      last--;
    }

    // return the modified string
    return array.join("");
  }

// test cases

const s1 = "hello";
console.log(reverseVowels(s1)); // "holle"

const s2 = "DesignGUrus";
console.log(reverseVowels(s2)); // "DusUgnGires"

const s3 = "AEIOU";
console.log(reverseVowels(s3)); // "UOIEA"

const s4 = "aA";
console.log(reverseVowels(s4)); // "Aa"

const s5 = "";
console.log(reverseVowels(s5)); // ""
