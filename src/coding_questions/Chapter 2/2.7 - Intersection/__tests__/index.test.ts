import { LinkedList } from '../../../../data_structures';
import { hasIntersection, intersection } from '..';

describe('Intersection', () => {
  it('should detect if there is an intersection', () => {
    const ll = new LinkedList([1, 2, 3, 4, 5, 6, 7]);
    const node = ll.find(4);
    const ll2 = new LinkedList();
    ll2.head = node;
    ll2.tail = ll.tail;
    const ll3 = new LinkedList([1, 2, 3, 4, 5, 6, 7]);

    expect(hasIntersection(ll, ll2)).toEqual(true);
    expect(hasIntersection(ll, ll3)).toEqual(false);
  });

  it('should return the intersection node', () => {
    const ll = new LinkedList([1, 2, 3, 4, 5, 6, 7]);
    const ll2 = new LinkedList();
    const ll3 = new LinkedList([1, 2, 3, 4, 5, 6, 7]);
    const ll4 = new LinkedList();
    const ll5 = new LinkedList([1, 2, 3]);
    const ll6 = new LinkedList([1, 2]);

    const node = ll.find(4);
    ll2.head = node;
    ll2.tail = ll.tail;
    ll5.tail!.next = node;
    ll5.tail = ll.tail;
    ll6.tail!.next = node;
    ll6.tail = ll.tail;

    expect(intersection(ll, ll2)).toEqual(node);
    expect(intersection(ll2, ll)).toEqual(node);
    expect(intersection(ll, ll3)).toEqual(null);
    expect(intersection(ll3, ll)).toEqual(null);
    expect(intersection(ll, ll4)).toEqual(null);
    expect(intersection(ll4, ll)).toEqual(null);
    expect(intersection(ll, ll5)).toEqual(node);
    expect(intersection(ll, ll6)).toEqual(node);
  });
});
