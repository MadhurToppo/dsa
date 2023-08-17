function isPangram(sentence: string): boolean {
  let str: string = sentence.toLowerCase();
  let alphabet: Array<string> = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (str.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }

  return true;
}

// Expected output: true
console.log(isPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));

// Expected output: false
console.log(isPangram("This is not a pangram"));

// Expected output: true
console.log(isPangram("abcdef ghijkl mnopqr stuvwxyz"));

// Expected output: false
console.log(isPangram(""));

// Expected output: true
console.log(isPangram("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
