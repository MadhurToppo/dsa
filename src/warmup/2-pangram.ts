export function isPangram(sentence: string): boolean {
  const str: string = sentence.toLowerCase();
  const alphabet: Array<string> = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (str.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }

  return true;
}
