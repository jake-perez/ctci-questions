/**
 * Check Permutation: Given two strings, write a method to decide if
 * one is a permutation of the other.
 */

const arePermutations = (str1: string, str2: string): boolean => {
  const str1Arr: string[] = str1.split('');
  const str2Arr: string[] = str2.split('');
  if (str1.length !== str2.length) {
    return false;
  }
  const seenSet: any = {};
  str1Arr.forEach((letter: string) => {
    if (seenSet[letter]) {
      seenSet[letter]++;
    } else {
      seenSet[letter] = 1;
    }
  });

  str2Arr.forEach((letter: string) => {
    if (seenSet[letter]) {
      seenSet[letter]--;
    } else {
      seenSet[letter] = 1;
    }
  });

  for (const letter of Object.keys(seenSet)) {
    if (seenSet[letter]) {
      return false;
    }
  }

  return true;
};

export { arePermutations };
