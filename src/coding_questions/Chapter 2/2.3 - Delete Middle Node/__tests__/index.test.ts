import { LinkedList } from '../../../../data_structures';
import { deleteMiddle } from '..';

describe('Delete Middle Node', () => {
  it('should delete a middle-ish node', () => {
    const numberLL = new LinkedList([1, 2, 3, 4, 5, 6]);
    const number2LL = new LinkedList([1, 2, 3, 4, 5, 6]);
    const empty = new LinkedList();

    const node = numberLL.find(4);
    const headNode = number2LL.head;
    const result = deleteMiddle(node!, numberLL);
    const result2 = deleteMiddle(headNode!, number2LL);

    expect(result.print()).toEqual('1 -> 2 -> 3 -> 5 -> 6 -> null');
    expect(deleteMiddle(node!, empty)).toEqual(empty);
    expect(result2.print()).toEqual('1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null');
  });
});
