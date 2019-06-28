import { random } from 'faker';

import { INode } from '../../declarations/interfaces';
import { TAN } from '../../declarations/types';

import LinkedList from '../';
import Node from '../../node';

const { alphaNumeric, word } = random;

describe('`LinkedList` class', () => {
  describe('`LinkedList` class instantiation', () => {
    it('can successfully instantiate an empty linked list', () => {
      const ll: LinkedList = new LinkedList();
      expect(ll).toBeDefined();
      expect(ll.head).toBeNull();
    });

    it('can successfully instantiate a linked list with `data`', () => {
      const data: TAN = alphaNumeric();
      const ll: LinkedList = new LinkedList(data);
      expect(ll.head.data).toBe(data);
    });
  });

  describe('`insert` method', () => {
    it('can properly insert into the linked list', () => {
      const ll: LinkedList = new LinkedList();
      ll.insert('a');
      expect(ll.head).toBeInstanceOf(Node);
    });

    it('The head property will properly point to the first node in the linked list', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      ll.insert(a);
      expect(ll.head.data).toBe(a);
    });

    it('can properly insert multiple nodes into the linked list', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      ll.insert(a);
      ll.insert(b);
      ll.insert(c);
      expect(ll.head.data).toBe(c);
      expect(ll.head.next.data).toBe(b);
      expect(ll.head.next.next.data).toBe(a);
    });
  });

  describe('`includes` method', () => {
    it('Will return true when finding a value within the linked list that exists', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      ll.insert(a);
      const bool: boolean = ll.includes(a);
      expect(bool).toBeTruthy();
    });

    it('Will return false when searching for a value in the linked list that does not exist', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      const c: TAN = word();
      ll.insert(a);
      const bool: boolean = ll.includes(c);
      expect(bool).toBeFalsy();
    });

    it('can properly return a collection of all the values that exist in the linked list', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      ll.insert(a);
      ll.insert(b);
      ll.insert(c);
      const collection: string[] = ll.print();
      expect(collection).toBeDefined();
      expect(collection).toEqual([c, b, a]);
    });
  });

  describe('`append` method', () => {
    it('can successfuly add a node to the end of an empty linked list', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      ll.append(a);
      expect(ll.head.data).toBe(a);
    });

    it('can successfully add a node to the end of the linked list', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      ll.insert(a);
      ll.insert(b);
      ll.append(c);

      let currentNode: INode = ll.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      expect(currentNode.data).toBe(c);
    });

    it('can successfully add multiple nodes to the end of a linked list', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      ll.insert(b);
      ll.insert(a);
      ll.append(c);

      let currentNode: INode = ll.head;
      expect(currentNode.next.data).toBe(b);

      currentNode = ll.head.next;
      expect(currentNode.next.data).toBe(c);
    });
  });

  describe('`insertBefore` method', () => {
    it('can successfully insert a node before a node located in the middle of a linked list', () => {
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      const d: TAN = alphaNumeric();

      const ll: LinkedList = new LinkedList(a);
      ll.append(b);
      ll.append(d);

      ll.insertBefore(d, c);

      const middle: INode = ll.head.next;
      expect(middle.data).toBe(b);

      const next: INode = middle.next;
      expect(next.data).toBe(c);
    });

    it('can successfully insert a node before the first node of a linked list', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      ll.insert(b);
      ll.insertBefore(b, a);
      expect(ll.head.data).toBe(a);
    });
  });

  describe('`insertAfter` method', () => {
    it('throws an error if the list is empty', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();

      expect(() => ll.insertAfter(a, b)).toThrow();
    });

    it('throws an error if `newData` argument is `null`', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      const b: null = null;

      expect(() => ll.insertAfter(a, b)).toThrow();
    });

    it('throws an error if `newData` argument is `undefined`', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      const b: undefined = undefined;

      expect(() => ll.insertAfter(a, b)).toThrow();
    });

    it('throws an error if the given `data` does not exist in the linked list', () => {
      const a: TAN = alphaNumeric();
      const ll: LinkedList = new LinkedList(a);

      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();

      expect(() => ll.insertAfter(b, c)).toThrow();
    });

    it('can insert after a node after the beginning of the linked list', () => {
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();

      const ll: LinkedList = new LinkedList(a);
      ll.insertAfter(a, b);

      const head: INode = ll.head;
      expect(head.data).toBe(a);

      const next: INode = head.next;
      expect(next.data).toBe(b);
    });

    it('can insert after a node in the middle of the linked list', () => {
      const ll: LinkedList = new LinkedList();

      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      const d: TAN = alphaNumeric();
      const e: TAN = alphaNumeric();
      const f: TAN = alphaNumeric();
      const g: TAN = alphaNumeric();

      ll.append(a);
      ll.append(b);
      ll.append(c);
      ll.append(d);
      // e missing
      ll.append(f);
      ll.append(g);

      ll.insertAfter(d, e);

      const middle = ll.head.next.next.next.next;
      expect(middle.data).toBe(e);
    });

    it('can insert a node after the last node of the linked list', () => {
      const ll: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      ll.insert(a);
      ll.insertAfter(a, b);
      const last = ll.head.next;
      expect(last.data).toBe(b);
    });
  });

  describe('`kthFromEnd` method', () => {
    const ll: LinkedList = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);

    it('should throw an error where `k` is greater than the length of the linked list', () => {
      expect(() => ll.kthFromEnd(100)).toThrow();
    });

    it('should return a value where `k` and the length of the list are the same', () => {
      expect(ll.kthFromEnd(4)).toBe(1);
    });

    it('should throw an error where `k` is not a positive integer', () => {
      expect(() => ll.kthFromEnd(-1)).toThrow();
    });

    it('should return a value where the linked list is of a size 1', () => {
      const nl: LinkedList = new LinkedList();
      const a: TAN = alphaNumeric();
      nl.append(a);
      expect(nl.kthFromEnd(0)).toBe(a);
    });

    it('should return a value where `k` is not at the end, but somewhere in the middle of the linked list', () => {
      expect(ll.kthFromEnd(2)).toBe(3);
    });
  });
});
