export function reverseVowels(s: string): string {
  const vowels: string = "aeiouAEIOU";
  let first: number = 0;
  let last: number = s.length - 1;
  const array: Array<string> = s.split("");

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
}
