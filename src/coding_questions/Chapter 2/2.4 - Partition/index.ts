/**
 * Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
 * before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
 * to be after the elements less than x (see below). The partition element x can appear anywhere in the
 * "right partition"; it does not need to appear between the left and right partitions.
 *
 * EXAMPLE
 *
 * Input:
 * 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
 *
 * Output:
 * 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */

import { LinkedList, Node } from '../../../data_structures';

const partition = (value: number, list: LinkedList<any>): void => {
  let ptr: null | Node<any> = list.head;
  if (!ptr) {
    return;
  }
  let startingPoint: null | Node<any> = null;
  let found: boolean = false;
  while (!found && ptr) {
    if (ptr.value >= value) {
      startingPoint = ptr;
      found = true;
    }
    ptr = ptr.next;
  }

  if (!startingPoint) {
    return;
  }

  let newPtr = startingPoint.next;
  while (newPtr) {
    if (newPtr.value < value) {
      const temp = startingPoint!.value;
      startingPoint!.value = newPtr.value;
      newPtr.value = temp;
      startingPoint = startingPoint!.next;
    }
    newPtr = newPtr.next;
  }
};

export { partition };
