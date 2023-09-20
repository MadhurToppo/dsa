export function isAnagram(s: string, t: string): boolean {
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
}
