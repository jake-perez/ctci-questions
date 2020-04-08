/**
 * Loop Detection: Given a circular linked list, implement an
 * algorithm that returns the node at the beginning of the loop.
 *
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer
 * points to an earlier node, so as to make a loop in the linked list.
 *
 * EXAMPLE
 *
 * Input: A -> B -> C - > D -> E -> C [the same C as earlier]
 * Output: C
 */

import { LinkedList } from '../../../data_structures';
import { Pointer } from '../types';

const loopSteps = (list: LinkedList<any>): number => {
  let sp: Pointer = list.head;
  let fp: Pointer = sp!.next;
  if (!fp) {
    return 0;
  }
  let count: number = 1;
  while (fp!.next && fp !== sp) {
    sp = sp!.next;
    fp = fp!.next.next;
    count += 2;
  }
  if (!fp!.next) {
    return 0;
  }
  return count;
};

const loopDetection = (list: LinkedList<any>): null | Pointer => {
  let ptr: Pointer = list.head;
  if (!ptr) {
    return null;
  }
  const loops: number = loopSteps(list);
  if (!loops) {
    return null;
  }
  let searcher: Pointer = ptr.next;
  while (true) {
    for (let i = 0; i < loops; i++) {
      if (ptr === searcher) {
        return ptr;
      }
      searcher = searcher!.next;
    }
    ptr = ptr!.next;
  }
};

export { loopSteps, loopDetection };
