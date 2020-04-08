import { arePermutations } from '..';

describe('Check Permutation', () => {
  it('should verify if two strings are permutations', () => {
    expect(arePermutations('hello', 'llohe')).toEqual(true);
    expect(arePermutations('hello', 'lloho')).toEqual(false);
    expect(arePermutations('hello', 'loho')).toEqual(false);
    expect(arePermutations('ello', 'lloho')).toEqual(false);
    expect(arePermutations('hello', '')).toEqual(false);
  });
});
