export default class Node<T> {
  public nodeValue: T;
  public nextNode: null | Node<T> = null;

  constructor(value: T) {
    this.nodeValue = value;
  }

  set value(newValue: T) {
    this.nodeValue = newValue;
  }

  get value(): T {
    return this.nodeValue;
  }

  set next(nextValue: null | Node<T>) {
    this.nextNode = nextValue;
  }

  get next(): null | Node<T> {
    return this.nextNode;
  }
}
