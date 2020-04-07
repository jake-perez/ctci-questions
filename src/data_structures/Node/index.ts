export default class Node<T> {
  _value: T;
  _next: null | Node<T>;

  constructor(value: T) {
    this._value = value;
  }

  set value(newValue: T) {
    this._value = newValue;
  }

  get value(): T {
    return this._value;
  }

  set next(nextValue: null | Node<T>) {
    this._next = nextValue;
  }

  get next(): null | Node<T> {
    return this._next;
  }
}
