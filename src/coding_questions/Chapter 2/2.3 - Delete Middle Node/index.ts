/**
 * Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
 * the first and last node, not necessarily the exact middle) of a singly linked list, given only
 * access to that node.
 *
 * EXAMPLE
 *
 * Input: node c from the linked lista->b->c->d->e->f
 * Result: nothing is returned, but the new linked list looks like a->b->d->e->f
 */
import { LinkedList, Node } from '../../../data_structures';

const deleteMiddle = (node: Node<any>, list: LinkedList<any>): LinkedList<any> => {
  let ptr = list.head;
  if (!ptr) {
    return list;
  }
  if (node === list.head || node === list.tail) {
    return list;
  }

  while (ptr) {
    if (ptr.next === node) {
      ptr.next = ptr.next.next;
    } else {
      ptr = ptr.next;
    }
  }

  return list;
};

export { deleteMiddle };
