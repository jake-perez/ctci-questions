/**
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting
 * node. Note that the intersection is defined based on reference, not value. That is, if the kth
 * node of the first linked list is the exact same node (by reference) as the jth node of the second
 * linked list, then they are intersecting.
 *
 * Example:
 *
 * Interesction: True
 *  1 - 2 - 3
 *           \
 *            5 - 6 - null
 *           /
 *      4 - 4
 *
 * Intersection: False
 *  1 - 2 - 3 - null
 *  4 - 4 - 5 - 6 - null
 *
 */

import { LinkedList } from '../../../data_structures';
import { Pointer } from '../types';

const hasIntersection = (list1: LinkedList<any>, list2: LinkedList<any>): boolean => {
  return list1.tail === list2.tail;
};

const getListLength = (list: LinkedList<any>): number => {
  let ptr = list.head;
  let counter = 0;
  while (ptr) {
    ptr = ptr.next;
    counter++;
  }
  return counter;
};

const intersection = (list1: LinkedList<any>, list2: LinkedList<any>): Pointer => {
  const list1Length = getListLength(list1);
  const list2Length = getListLength(list2);
  if (!hasIntersection(list1, list2) || list1Length === 0 || list2Length === 0) {
    return null;
  }

  if (list2Length === list1Length) {
    let ptr1 = list1.head;
    let ptr2 = list2.head;
    while (ptr1 !== ptr2) {
      ptr1 = ptr1!.next;
      ptr2 = ptr2!.next;
    }
    return ptr1;
  }

  let shortList = list1.head;
  let longList = list2.head;
  const difference = Math.abs(getListLength(list1) - getListLength(list2));
  if (getListLength(list2) < getListLength(list1)) {
    shortList = list2.head;
    longList = list1.head;
  }

  for (let i = 0; i < difference; i++) {
    longList = longList!.next;
  }
  while (longList !== shortList) {
    longList = longList!.next;
    shortList = shortList!.next;
  }
  return longList;
};

export { hasIntersection, intersection };
