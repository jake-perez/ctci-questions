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

  it('should append values to linked list', () => {
    const numberLL = new LinkedList();
    const stringLL = new LinkedList();

    numberLL.append(5);
    numberLL.append(4);
    stringLL.append('hello');
    stringLL.append('world');

    expect(numberLL.head!.value).toEqual(5);
    expect(numberLL.tail!.value).toEqual(4);
    expect(stringLL.head!.value).toEqual('hello');
    expect(stringLL.tail!.value).toEqual('world');
  });

  it('should prepend values to linked list', () => {
    const numberLL = new LinkedList();
    const stringLL = new LinkedList();

    numberLL.prepend(5);
    numberLL.prepend(4);
    stringLL.prepend('hello');
    stringLL.prepend('world');

    expect(numberLL.head!.value).toEqual(4);
    expect(numberLL.tail!.value).toEqual(5);
    expect(stringLL.head!.value).toEqual('world');
    expect(stringLL.tail!.value).toEqual('hello');
  });

  it('should pretty print linked lists', () => {
    const numberLL = new LinkedList();
    const stringLL = new LinkedList();
    const blank = new LinkedList();

    numberLL.append(5);
    numberLL.prepend(4);
    stringLL.prepend('hello');
    stringLL.append('world');

    expect(numberLL.print()).toEqual('4->5->null');
    expect(stringLL.print()).toEqual('hello->world->null');
    expect(blank.print()).toEqual('null');
  });
});
