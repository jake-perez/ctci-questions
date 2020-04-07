import { LinkedList, Node } from '../../../../data_structures';
import { KthLast } from '../';

describe('Kth Last', () => {
  it('should return Kth from Last for valid K', () => {
    const numberLL = new LinkedList([1, 2, 3, 4, 5]);
    const empty = new LinkedList();

    const result: null | Node<any> = KthLast(2, numberLL);
    const trueResult: null | Node<any> = numberLL.find(4);

    expect(result).toEqual(trueResult);
    expect(KthLast(12, numberLL)).toBeNull;
    expect(KthLast(2, empty)).toBeNull;
  });
});
