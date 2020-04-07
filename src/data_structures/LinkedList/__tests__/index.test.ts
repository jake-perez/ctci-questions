import LinkedList from '../index';
import Node from '../../Node';
describe('Linked List', () => {
  it('should have getters and setters function correctly', () => {
    const ll = new LinkedList();

    expect(ll.head).toBeNull;
    expect(ll.tail).toBeNull;

    ll.head = new Node(5);
    ll.tail = new Node(4);

    expect(ll.head.value).toEqual(5);
    expect(ll.tail.value).toEqual(4);
  });

  it('should add values to linked list', () => {
    const numberLL = new LinkedList();
    const stringLL = new LinkedList();

    numberLL.add(5);
    numberLL.add(4);
    stringLL.add('hello');
    stringLL.add('world');

    expect(numberLL.head!.value).toEqual(5);
    expect(numberLL.tail!.value).toEqual(4);
    expect(stringLL.head!.value).toEqual('hello');
    expect(stringLL.tail!.value).toEqual('world');
  });
});
