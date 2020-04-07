import Node from '../Node';

export default class LinkedList<T> {
  private headNode: null | Node<T> = null;
  private tailNode: null | Node<T> = null;

  constructor() {
    // Initialize a new Linked List
  }

  set head(node: null | Node<T>) {
    this.headNode = node;
  }

  get head(): null | Node<T> {
    return this.headNode;
  }

  set tail(node: null | Node<T>) {
    this.tailNode = node;
  }

  get tail(): null | Node<T> {
    return this.tailNode;
  }

  public add = (value: T) => {
    if (this.headNode === null) {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    } else {
      const oldTail = this.tailNode!;
      oldTail.next = new Node(value);
      this.tailNode = oldTail.next;
    }
  };
}
