const vowels: string = "aeiouAEIOU";

const reverseVowels = (s: string): string => {
  let first: number = 0;
  let last: number = s.length - 1;
  let array: Array<string> = s.split("");

  while (first < last) {
    while (first < last && vowels.indexOf(array[first]) === -1) {
      first++;
    }
    while (first < last && vowels.indexOf(array[last]) === -1) {
      last--;
    }
    [array[first], array[last]] = [array[last], array[first]];
    first++;
    last--;
  }

  const reversed: string = array.join("");
  return reversed;
};

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
