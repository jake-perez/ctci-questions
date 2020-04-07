import Node from '../Node';

export default class LinkedList<T> {
  private headNode: null | Node<T> = null;
  private tailNode: null | Node<T> = null;

  constructor(args: T[] = []) {
    // Initialize a new Linked List
    if (args.length) {
      for (const arg of args) {
        this.append(arg);
      }
    }
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

  public append = (value: T) => {
    if (this.headNode === null) {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    } else {
      const oldTail = this.tailNode!;
      oldTail.next = new Node(value);
      this.tailNode = oldTail.next;
    }
  };

  public prepend = (value: T) => {
    if (this.headNode === null) {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    } else {
      const newHead = new Node(value);
      newHead.next = this.headNode;
      this.headNode = newHead;
    }
  };

  public print = (): string => {
    let outputString: string = '';
    let ptr: null | Node<T> = this.headNode;
    while (ptr) {
      outputString += `${ptr.value} -> `;
      ptr = ptr.next;
    }
    outputString += 'null';
    return outputString;
  };
}
