import Node from '../index';

describe('Node Data Structure', () => {
  const node = new Node(4);

  it('should create a node', () => {
    expect(node.value).toEqual(4);
    expect(node.next).toBeNull;
  });

  it('should be able to set node value', () => {
    node.value = 5;
    expect(node.value).toEqual(5);
  });

  it('should be able to set node next value', () => {
    node.next = new Node(4);
    expect(node.next).not.toBeNull;
    expect(node.next.value).toEqual(4);
  });
});
