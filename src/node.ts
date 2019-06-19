import { TData, TEntry } from './declarations/types';

/**
 * A simple node that can be used in multiple data structures.
 *
 * @class Node
 */
class Node {
  public data: TData;
  public next?: TEntry;
  constructor(data: TData = null) {
    this.data = data;
    this.next = null;
  }
}

export default Node;
