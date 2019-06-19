import { INode } from './declarations/interfaces';
import { TData, TEntry } from './declarations/types';
import Node from './node';

/**
 * A standalone stack with a `top`. It can push, pop, and print.
 *
 * @class Stack
 */
class Stack {
  public top: TEntry;
  constructor() {
    this.top = null;
  }

  public push(data: TData): void {
    const node: INode = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  public pop(): TEntry {
    if (!this.top || this.top.data === undefined || this.top.data === null) {
      return null;
    }

    const top: INode = this.top;
    if (this.top.next) {
      this.top = this.top.next;
    } else {
      this.top = null;
    }
    return top;
  }

  public print(): TData[] {
    if (!this.top || this.top.data === undefined || this.top.data === null) {
      return [];
    }

    let current: INode = this.top;

    const result: TData[] = [current.data];
    while (current.next) {
      current = current.next;
      result.push(current.data);
    }
    console.log(result);
    return result;
  }
}

export default Stack;
