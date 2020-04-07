import Node from '../index';

describe('Node Data Structure', () => {
  it('should create a node', () => {
    const node = new Node(4);

    expect(node.value).toEqual(4);
    expect(node.next).toBeNull;
  });
});
