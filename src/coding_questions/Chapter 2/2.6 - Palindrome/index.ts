/**
 * Palindrome: Implement a function to check if a linked list is a palindrome.
 */

import { LinkedList } from '../../../data_structures';
import { Pointer } from '../types';

const isPalindrome = (list: LinkedList<any>): boolean => {
  const reverseLL: LinkedList<any> = new LinkedList();
  let ptr: Pointer = list.head;
  while (ptr) {
    reverseLL.prepend(ptr.value);
    ptr = ptr.next;
  }
  return reverseLL.print() === list.print();
};

export { isPalindrome };
