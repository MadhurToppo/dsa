export function shortestDistance(
  words: Array<string>,
  word1: string,
  word2: string,
): number {
  let distance: number = words.length;
  let position1: number = -1;
  let position2: number = -1;

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
}
