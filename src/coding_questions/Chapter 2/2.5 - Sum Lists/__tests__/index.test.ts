import { sumLists } from '..';
import { LinkedList } from '../../../../data_structures';

describe('Sum Lists', () => {
  it('should add two empty linked lists', () => {
    const result = sumLists(new LinkedList(), new LinkedList());

    expect(result).toBeNull;
  });

  it('should add two non-empty linked lists', () => {
    const result = sumLists(new LinkedList([1, 2]), new LinkedList());
    const result1 = sumLists(new LinkedList(), new LinkedList([1, 2]));

    expect(result.print()).toEqual(new LinkedList([1, 2]).print());
    expect(result1.print()).toEqual(new LinkedList([1, 2]).print());
  });

  it('should add two linked lists of the same length', () => {
    const sumOne = sumLists(new LinkedList([1, 2]), new LinkedList([1, 2]));
    const sumTwo = sumLists(new LinkedList([1, 3, 5]), new LinkedList([2, 4, 6]));

    expect(sumOne.print()).toEqual(new LinkedList([2, 4]).print());
    expect(sumTwo.print()).toEqual(new LinkedList([3, 7, 1, 1]).print());
  });

  it('should add two uneven linked lists', () => {
    const sumOne = sumLists(new LinkedList([1, 8, 9]), new LinkedList([2, 4]));
    const sumTwo = sumLists(new LinkedList([1, 8]), new LinkedList([2, 4, 9]));

    expect(sumOne.print()).toEqual(new LinkedList([3, 2, 0, 1]).print());
    expect(sumTwo.print()).toEqual(new LinkedList([3, 2, 0, 1]).print());
  });
});
