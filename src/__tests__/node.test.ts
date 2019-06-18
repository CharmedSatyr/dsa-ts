import Node from '../node';

import { random } from 'faker';
const { alphaNumeric } = random;

describe('`Node` class', () => {
  it('can instantiate a node without data', () => {
    const node: Node = new Node();
    expect(node).toBeDefined();
  });

  it('has a `data` property with the value of `null`', () => {
    const node: Node = new Node();
    expect(node.data).toBeNull();
  });

  it('can instantiate a node with data that is stored in a `data` property', () => {
    const data: string | number = alphaNumeric();
    const node: Node = new Node(data);
    expect(node.data).toBe(data);
  });
});
