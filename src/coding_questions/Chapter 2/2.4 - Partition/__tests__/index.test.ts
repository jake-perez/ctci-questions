import { LinkedList } from '../../../../data_structures';
import { partition } from '..';

describe('Partition', () => {
  it('should partition a linked list', () => {
    const numberLL = new LinkedList([3, 5, 8, 5, 10, 2, 1]);
    const number2LL = new LinkedList();
    const number3LL = new LinkedList([3, 5, 8, 5, 10, 2, 1]);
    const number4LL = new LinkedList([3, 5, 8, 5, 10, 2, 1]);

    partition(5, numberLL);
    partition(5, number2LL);
    partition(3, number3LL);
    partition(12, number3LL);

    expect(numberLL.print()).toEqual('3 -> 2 -> 1 -> 5 -> 10 -> 5 -> 8 -> null');
    expect(number2LL.print()).toEqual('null');
    expect(number3LL.print()).toEqual('2 -> 1 -> 8 -> 5 -> 10 -> 3 -> 5 -> null');
    expect(number4LL.print()).toEqual('3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 -> null');
  });
});
