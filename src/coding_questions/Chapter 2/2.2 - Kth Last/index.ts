/**
 * Return Kth to Last: Implement an algorithm to find the
 * kth to last element of a singly linked list.
 */
import { LinkedList, Node } from '../../../data_structures';

const KthLast = (kValue: number, list: LinkedList<any>): null | Node<any> => {
  let ptr: null | Node<any> = list.head;
  if (!ptr) {
    return null;
  }

  for (let i = 0; i < kValue; i++) {
    if (!ptr) {
      return null;
    }
    ptr = ptr.next;
  }

  let returnNode = list.head;

  while (ptr) {
    returnNode = returnNode!.next;
    ptr = ptr.next;
  }

  return returnNode;
};

export { KthLast };
