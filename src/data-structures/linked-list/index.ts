import { INode } from '../../declarations/interfaces';
import { TData, TEntry } from '../../declarations/types';

import Node from '../node';

class LinkedList {
  /** The LinkedList class includes a head property that can be a node or `null`. */
  public head: TEntry;
  constructor() {
    /** A linked list is instantiated with a `head` that has a `null` value.  */
    this.head = null;
  }

  /** Add a new node with the given value to the end of the list */
  public append(data: TData): void {
    const newNode: INode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode: INode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  /**
   * Takes any value as an argument and returns a boolean
   * depending on whether that value exists as a node’s value
   * somewhere within the list.
   */
  public includes(data: TData): boolean {
    let currentNode: TEntry = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  /**
   * Takes any value as an argument and adds a new node with that value
   * to the `head` of the list with an O(1) Time performance.
   */
  public insert(data: TData): void {
    const node: INode = new Node(data); // create a new node
    node.next = this.head; // assign the new node's pointer to the current head
    this.head = node; // reassign the ll's head to the new node
  }

  /**
   * Add a new node with the given `newData` immediately after the
   * first node with the given `data`.
   */
  public insertAfter(data: TData, newData: TData): void {
    const preErr = `Error on LinkedList.insertAfter`;

    if (newData === null || newData === undefined) {
      throw new Error(`${preErr}: newData argument ${newData} is invalid`);
    }
    const newNode: INode = new Node(newData);

    let currentNode: TEntry = this.head;

    if (this.head === null) {
      throw new Error(`${preErr}: This list is empty`);
    }

    if (currentNode.data === data) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return;
    }

    while (currentNode.next !== null) {
      if (currentNode.data === data) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      throw new Error(
        `${preErr}: 'data' argument ${data} does not exist in this list`
      );
    }
  }

  /**
   * Add a new node with the given `newData` immediately before the
   * first node with the given `data`.
   */
  public insertBefore(data: TData, newData: TData): void {
    const newNode: INode = new Node(newData);
    let currentNode: TEntry = this.head;

    if (currentNode.data === data) {
      newNode.next = currentNode;
      this.head = newNode;
      return;
    }

    while (currentNode) {
      if (currentNode.next.data === data) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }

      currentNode = currentNode.next;
    }
  }

  /** Return a collection all of the data in the Linked List. */
  public print() {
    const collection: TData[] = []; // Collection will be an array
    // to the node's 0-based position in the linked list
    let currentNode: TEntry = this.head;
    let i: number = 0;

    while (currentNode !== null) {
      collection[i] = currentNode.data;
      i++;
      currentNode = currentNode.next;
    }

    return collection;
  }
  // Write a method for the Linked List class which takes a number, k, as a parameter.
  // Return the node’s data that is `k` from the end of the linked list. You have access
  // to the Node class and all the properties on the Linked List class as well as the
  // methods created in previous challenges.
  public kthFromEnd(k: number): TData | never {
    if (k < 0) {
      throw new Error('`LinkedList.kthFromEnd` error: Argument must be >= 0');
    }

    let len: number = 1;
    let current: TEntry = this.head;
    // Find the length of the LinkedList
    while (current.next) {
      len++;
      current = current.next;
    }

    // Throw an error if `k` is greater than the length of the
    // `LinkedList` instance.
    if (k > len) {
      throw new Error(
        '`LinkedList.kthFromEnd` error: Argument must be less than the length of the `LinkedList` instance.'
      );
    }

    // Reset current to head
    current = this.head;

    // Iterate to the target node
    for (let i: number = 1; i < len - k; i++) {
      current = current.next;
    }
    // Return its value
    return current.data;
  }
}

export default LinkedList;
