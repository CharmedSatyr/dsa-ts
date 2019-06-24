import { TData, TEntry } from './declarations/types';

/**
 * A simple node that can be used in multiple data structures.
 *
 * @class Node
 */
class Node {
  public data: TData;
  public next?: TEntry;
  public left?: TEntry;
  public right?: TEntry;
  constructor(data: TData = null) {
    this.data = data;

    // Stack/Queue
    this.next = null;

    // Binary tree/BST
    this.left = null;
    this.right = null;
  }
}

export default Node;
