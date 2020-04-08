import { isPalindrome } from '..';
import { LinkedList } from '../../../../data_structures';

describe('Palindrome', () => {
  it('should handle empty linked lists', () => {
    expect(isPalindrome(new LinkedList())).toEqual(true);
  });

  it('should detect palindromes of odd length linked lists', () => {
    const resultOne: boolean = isPalindrome(new LinkedList([1, 2, 3, 2, 1]));
    const resultTwo: boolean = isPalindrome(new LinkedList([1, 1, 3, 3, 4]));

    expect(resultOne).toEqual(true);
    expect(resultTwo).toEqual(false);
  });

  it('should detect palindromes of even length linked lists', () => {
    const resultOne: boolean = isPalindrome(new LinkedList([1, 2, 2, 1]));
    const resultTwo: boolean = isPalindrome(new LinkedList([1, 1, 3, 4]));

    expect(resultOne).toEqual(true);
    expect(resultTwo).toEqual(false);
  });
});
