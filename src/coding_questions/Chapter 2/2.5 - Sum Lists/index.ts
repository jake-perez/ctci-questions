/**
 * Sum Lists: You have two numbers represented by a linked list, where each node contains a single
 * digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
 * function that adds the two numbers and returns the sum as a linked list.
 *
 * EXAMPLE
 * Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
 * Output: 2 -> 1 -> 9. That is, 912.
 *
 * FOLLOW UP
 * Suppose the digits are stored in forward order. Repeat the above problem.
 *
 * EXAMPLE
 * Input:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
 * Output: 9 - > 1 -> 2. That is, 912.
 */

import { LinkedList } from '../../../data_structures';
import { Pointer } from '../types';

const sumLists = (lst1: LinkedList<any>, lst2: LinkedList<any>): LinkedList<any> => {
  const sumLL: LinkedList<number> = new LinkedList();

  if (!lst1.head) {
    return lst2;
  }
  if (!lst2.head) {
    return lst1;
  }
  let ptr1: Pointer = lst1.head;
  let ptr2: Pointer = lst2.head;

  let carry: number = 0;
  let totalSum: number = 0;

  while (ptr1 && ptr2) {
    totalSum = ptr1.value + ptr2.value + carry;
    const value: number = totalSum % 10;
    carry = Math.floor(totalSum / 10);
    sumLL.append(value);
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  if (ptr1) {
    while (ptr1) {
      totalSum = ptr1.value + carry;
      const value: number = totalSum % 10;
      carry = Math.floor(totalSum / 10);
      sumLL.append(value);
      ptr1 = ptr1.next;
    }
  } else if (ptr2) {
    while (ptr2) {
      totalSum = ptr2.value + carry;
      const value: number = totalSum % 10;
      carry = Math.floor(totalSum / 10);
      sumLL.append(value);
      ptr2 = ptr2.next;
    }
  }
  if (carry) {
    sumLL.append(carry);
  }

  return sumLL;
};

export { sumLists };
