/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

/**
 * O(n) - runtime, O(n) - space
 */
const isUniqueFast = (str: string): boolean => {
  const seen: Set<string> = new Set<string>();

  for (const letter of str) {
    if (seen.has(letter)) {
      return false;
    }
    seen.add(letter);
  }

  return true;
};

// O(n^2) - runtime, O(1) - constant time
const isUniqueSlow = (str: string): boolean => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

export { isUniqueFast, isUniqueSlow };
