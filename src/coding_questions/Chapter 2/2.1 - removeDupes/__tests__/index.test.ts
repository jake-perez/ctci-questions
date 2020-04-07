import LinkedList from '../../../../data_structures/LinkedList';
import { removeDupesWithBuffer } from '..';

describe('Remove Duplicates', () => {
  it('should remove duplicates from a linked list', () => {
    const duplicateLL = new LinkedList([1, 3, 2, 4, 2, 4, 5, 7, 1, 1]);
    const stringLL = new LinkedList(['hi', 'hello', 'hey', 'hi', 'hello']);
    const emptyLL = new LinkedList();

    const result = removeDupesWithBuffer(duplicateLL);
    const stringResult = removeDupesWithBuffer(stringLL);

    expect(result.print()).toEqual('1 -> 3 -> 2 -> 4 -> 5 -> 7 -> null');
    expect(stringResult.print()).toEqual('hi -> hello -> hey -> null');
    expect(removeDupesWithBuffer(emptyLL)).toEqual(emptyLL);
  });
});
