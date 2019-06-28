import { random } from 'faker';

import { INode } from '../../../declarations/interfaces';
import { TAN } from '../../../declarations/types';

import Node from '../';

const { alphaNumeric } = random;

describe('`Node` class', () => {
  it('cannot instantiate a node with `null` data', () => {
    expect(() => new Node(null)).toThrow();
  });

  it('cannot instantiate a node with `undefined` data', () => {
    expect(() => new Node(undefined)).toThrow();
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

  it('can instantiate a node with a `left` property of `null` or a `Node`', () => {
    const data: TAN = alphaNumeric();
    const node: INode = new Node(data);
    const left: INode = new Node(data);
    node.left = left;
    expect(node.data).toBe(data);
    expect(node.left).toEqual(left);
  });

  it('can instantiate a node with a `right` property of `null` or a `Node`', () => {
    const data: TAN = alphaNumeric();
    const node: INode = new Node(data);
    const right: INode = new Node(data);
    node.right = right;
    expect(node.data).toBe(data);
    expect(node.right).toEqual(right);
  });
});
