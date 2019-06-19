import { INode } from '../declarations/interfaces';
import { TAN } from '../declarations/types';
import Node from '../node';

import { random } from 'faker';
const { alphaNumeric } = random;

describe('`Node` class', () => {
  it('can instantiate a node without data', () => {
    const node: INode = new Node();
    expect(node).toBeDefined();
  });

  it('has a `data` property with the value of `null`', () => {
    const node: INode = new Node();
    expect(node.data).toBeNull();
  });

  it('can instantiate a node with data that is stored in a `data` property', () => {
    const data: TAN = alphaNumeric();
    const node: INode = new Node(data);
    expect(node.data).toBe(data);
  });

  it('can instantiate a node with a `next` property of `null` or a `Node`', () => {
    const data: TAN = alphaNumeric();
    const node: INode = new Node(data);
    const next: INode = new Node(data);
    node.next = next;
    expect(node.data).toBe(data);
    expect(node.next).toEqual(next);
  });
});
