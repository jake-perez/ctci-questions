import { LinkedList } from '../../../../data_structures';
import { loopSteps, loopDetection } from '..';

describe('Loop Detection', () => {
  it('should detect loopCount', () => {
    const ll = new LinkedList([1, 2, 3, 4]);
    const ll2 = new LinkedList([1]);
    const ll3 = new LinkedList([1, 2, 3, 4]);

    const node = ll3.find(2);
    ll3.tail!.next = node;

    expect(loopSteps(ll2)).toEqual(0);
    expect(loopSteps(ll)).toEqual(0);
    expect(loopSteps(ll3)).toEqual(5);
  });

  it('should detect loop', () => {
    const ll = new LinkedList([1, 2, 3, 4]);
    const ll2 = new LinkedList([1]);
    const ll3 = new LinkedList([1, 2, 3, 4]);
    const ll4 = new LinkedList();
    const ll5 = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const node = ll3.find(2);
    const node2 = ll3.find(4);
    ll3.tail!.next = node;
    ll5.tail!.next = node2;

    expect(loopDetection(ll2)).toBeNull;
    expect(loopDetection(ll)).toBeNull;
    expect(loopDetection(ll3)).toEqual(node);
    expect(loopDetection(ll5)).toEqual(node2);
    expect(loopDetection(ll4)).toBeNull;
  });
});
