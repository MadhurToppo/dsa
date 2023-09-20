export function isPangram(sentence: string): boolean {
  let str: string = sentence.toLowerCase();
  let alphabet: Array<string> = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (str.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }

  return true;
}
