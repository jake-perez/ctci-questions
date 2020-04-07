/**
 * Write code to remove duplicates from an unsorted linked list.
 * How would you solve this problem if a temporary buffer is not allowed?
 */

import LinkedList from '../../data_structures/LinkedList';

const removeDupesWithBuffer = (list: LinkedList<any>): LinkedList<any> => {
  const seen: Set<any> = new Set<any>();
  let ptr = list.head;
  if (ptr === null) {
    return list;
  }
  seen.add(ptr.value);
  while (ptr && ptr.next) {
    if (seen.has(ptr.next.value)) {
      ptr.next = ptr.next.next;
    } else {
      seen.add(ptr.next.value);
      ptr = ptr.next;
    }
  }
  return list;
};

export { removeDupesWithBuffer };
