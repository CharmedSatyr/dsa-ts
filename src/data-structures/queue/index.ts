import Node from '../node';

import { TData, TEntry } from '../../declarations/types';

/**
 * A standalone Queue with a `front` and `back`.
 *
 * @class Queue
 */
class Queue {
  public front: TEntry;
  public back: TEntry;
  constructor() {
    /** Queues are instantiated with `null` values for `front` and `back` properties. */
    this.front = null;
    this.back = null;
  }

  /**
   * Add a node to the back of the queue
   *
   * @param data The new node will have the given data
   * @memberof Queue
   */
  public enqueue(data: TData): void {
    const node: TEntry = new Node(data);

    if (!this.front) {
      this.back = node;
      this.front = node;
    } else {
      const back: TEntry = this.back;
      back.next = node;
      this.back = node;
    }
  }

  /**
   * Remove a node from the front of the queue and return its data
   *
   * @memberof Queue
   */
  public dequeue() {
    const current: TEntry = this.front;

    if (!current) {
      return null;
    }

    if (
      !current.next ||
      current.next.data === undefined ||
      current.next.data === null
    ) {
      this.front = null;
      this.back = null;
      return current.data;
    }

    const { data }: TData = current;
    this.front = current.next;

    return data;
  }

  /**
   * Check value of the front of the queue
   *
   * @memberof Queue
   */
  public peek() {
    if (
      !this.front ||
      this.front.data === undefined ||
      this.front.data === null
    ) {
      return null;
    }
    return this.front.data;
  }
}

export default Queue;
