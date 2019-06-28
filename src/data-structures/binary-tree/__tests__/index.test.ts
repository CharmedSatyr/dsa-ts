import { random } from 'faker';

import { INode } from '../../../declarations/interfaces';
import { TAN, TEntry } from '../../../declarations/types';

import BinaryTree from '../';
import Node from '../../node';

const { alphaNumeric } = random;

describe('`BinaryTree` class', () => {
  it('can successfully instantiate an empty tree', () => {
    const bt: BinaryTree = new BinaryTree();
    expect(bt).toBeDefined();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const data: TAN = alphaNumeric();

    const bt: BinaryTree = new BinaryTree(data);
    expect(bt).toBeDefined();

    expect.assertions(1);
  });

  describe('`add` method', () => {
    it('can successfully add left and right children in a balanced way', () => {
      /***
       *1        a
       *        ^ ^
       *       /   \
       *2     b     c
       *     / \   / \
       *3   d   e f   g
       *   /
       *4 h
       ***/
      const a: TAN = alphaNumeric();
      const bt: BinaryTree = new BinaryTree(a);
      expect(bt.root.data).toBe(a);

      const b: TAN = alphaNumeric();
      bt.add(b);
      expect(bt.root.left.data).toBe(b);

      const c: TAN = alphaNumeric();
      bt.add(c);
      expect(bt.root.right.data).toBe(c);

      const b2: TEntry = bt.root.left;
      const c2: TEntry = bt.root.right;

      const d: TAN = alphaNumeric();
      bt.add(d);
      expect(b2.left.data).toBe(d);

      const e: TAN = alphaNumeric();
      bt.add(e);
      expect(b2.right.data).toBe(e);

      const f: TAN = alphaNumeric();
      bt.add(f);
      expect(c2.left.data).toBe(f);

      const g: TAN = alphaNumeric();
      bt.add(g);
      expect(c2.right.data).toBe(g);

      const d3: INode = b2.left;

      const h: TAN = alphaNumeric();
      bt.add(h);
      expect(d3.left.data).toBe(h);
    });
  });

  describe('`findMaximumValue` method', () => {
    it('returns `null` if the `root.data` is `undefined`', () => {
      const bt: BinaryTree = new BinaryTree();
      const result: null | number = bt.findMaximumValue(bt.root);
      expect(result).toBeNull();
    });

    it('returns the maximum value of data in a tree', () => {
      const bt: BinaryTree = new BinaryTree();
      const arr: number[] = [0, 1, 2, 20, 3, 4, 5, 42.1, 6];
      arr.forEach(n => bt.add(n));

      const result: number | null = bt.findMaximumValue();
      expect(result).toEqual(42.1);
    });
  });

  describe('`breadthFirstOrder` method', () => {
    it('returns `null` if `root` is `undefined`', () => {
      const bt: BinaryTree = new BinaryTree();
      const result: null = bt.breadthFirstOrder();
      expect(result).toBeNull();
    });

    it('returns `null` if given an argument with no `data`', () => {
      const bt: BinaryTree = new BinaryTree();
      const empty: object = {};
      expect(bt.breadthFirstOrder(empty)).toBeNull();
    });

    it('returns a collection if given a single node', () => {
      const bt1: BinaryTree = new BinaryTree();

      const data: TAN = alphaNumeric();
      const bt2: BinaryTree = new BinaryTree(data);

      const expected: TAN[] = [data];
      expect(bt1.breadthFirstOrder(bt2.root)).toEqual(expected);
    });

    it('can successfully return a collection from a breadth-first order traversal', () => {
      const arr: TAN[] = [];
      for (let i = 0; i < 10; i++) {
        arr.push(alphaNumeric());
      }

      const bt: BinaryTree = new BinaryTree();
      arr.forEach((n: TAN): void => bt.add(n));

      const result: TAN[] = bt.breadthFirstOrder();
      expect(result).toEqual(arr);
    });
  });

  describe('`preOrder` method', () => {
    it('returns null if the tree has no nodes', () => {
      const bt: BinaryTree = new BinaryTree();
      expect(bt.preOrder()).toBeNull();
    });

    it('returns null if given an argument with no root', () => {
      const bt: BinaryTree = new BinaryTree();
      const empty: object = {};
      expect(bt.preOrder(empty)).toBeNull();
    });

    it('returns a preorder collection if given a node', () => {
      const bt1: BinaryTree = new BinaryTree();

      const data: TAN = alphaNumeric();
      const bt2: BinaryTree = new BinaryTree(data);

      const expected: TAN[] = [data];
      expect(bt1.preOrder(bt2.root)).toEqual(expected);
    });

    it('returns its tree data in preorder if not given a node', () => {
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      const d: TAN = alphaNumeric();
      const e: TAN = alphaNumeric();
      const f: TAN = alphaNumeric();

      const bt: BinaryTree = new BinaryTree(a);
      bt.add(b);
      bt.add(c);
      expect(bt.preOrder()).toEqual([a, b, c]);

      bt.add(d);
      bt.add(e);
      bt.add(f);
      expect(bt.preOrder()).toEqual([a, b, d, e, c, f]);
    });
  });

  describe('`inOrder` method', () => {
    it('returns null if the tree has no nodes', () => {
      const bt: BinaryTree = new BinaryTree();
      expect(bt.inOrder()).toBeNull();
    });

    it('returns inorder collection from inorder traversal', () => {
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      const d: TAN = alphaNumeric();
      const e: TAN = alphaNumeric();
      const f: TAN = alphaNumeric();
      const g: TAN = alphaNumeric();

      const bt: BinaryTree = new BinaryTree(a);
      bt.add(b);
      bt.add(c);
      expect(bt.inOrder()).toEqual([b, a, c]);

      bt.add(d);
      bt.add(e);
      bt.add(f);
      bt.add(g);
      expect(bt.inOrder()).toEqual([d, b, e, a, f, c, g]);
    });
  });

  describe('`postOrder` method', () => {
    it('returns null if the tree has no nodes', () => {
      const bt: BinaryTree = new BinaryTree();
      expect(bt.postOrder()).toBeNull();
    });

    it('returns postorder collection from postorder traversal', () => {
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      const d: TAN = alphaNumeric();
      const e: TAN = alphaNumeric();
      const f: TAN = alphaNumeric();
      const g: TAN = alphaNumeric();

      const bt: BinaryTree = new BinaryTree(a);
      bt.add(b);
      bt.add(c);
      expect(bt.postOrder()).toEqual([b, c, a]);

      bt.add(d);
      bt.add(e);
      bt.add(f);
      bt.add(g);
      expect(bt.postOrder()).toEqual([d, e, b, f, g, c, a]);
    });
  });

  describe('`getHeight` method', () => {
    it('should return 0 if given a tree with no root', () => {
      const bt: BinaryTree = new BinaryTree();
      expect(bt.getHeight()).toBe(0);
    });

    it('should return `1` if the root has no children', () => {
      const a: TAN = alphaNumeric();
      const bt: BinaryTree = new BinaryTree(a);

      expect(bt.getHeight()).toBe(1);
    });

    /***
     *1        a
     *        ^ ^
     *       /   \
     *2     b     c
     *     / \   / \
     *3   d   e f   g
     *   /
     *4 h
     ***/
    it('should return the height of a tree that has a longer left', () => {
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      const d: TAN = alphaNumeric();
      const e: TAN = alphaNumeric();
      const f: TAN = alphaNumeric();
      const g: TAN = alphaNumeric();
      const h: TAN = alphaNumeric();

      const bt: BinaryTree = new BinaryTree(a);
      bt.add(b);
      bt.add(c);
      bt.add(d);
      bt.add(e);
      bt.add(f);
      bt.add(g);
      bt.add(h);

      expect(bt.getHeight()).toBe(4);
    });

    /***
     *1        a
     *        ^ ^
     *       /   \
     *2     b     c
     *     / \   / \
     *3   d   e f   g
     ***/
    it('should return the height of a balanced tree', () => {
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      const d: TAN = alphaNumeric();
      const e: TAN = alphaNumeric();
      const f: TAN = alphaNumeric();
      const g: TAN = alphaNumeric();

      const bt: BinaryTree = new BinaryTree(a);
      bt.add(b);
      bt.add(c);
      bt.add(d);
      bt.add(e);
      bt.add(f);
      bt.add(g);

      expect(bt.getHeight()).toBe(3);
    });

    /***
     *1       a
     *       ^ ^
     *      /   \
     *2    b     c
     *    / \   / \
     *3  d   e f   g
     *              \
     *4              h
     ***/
    it('should return the height of a tree that has a longer right', () => {
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      const d: TAN = alphaNumeric();
      const e: TAN = alphaNumeric();
      const f: TAN = alphaNumeric();
      const g: TAN = alphaNumeric();
      const h: TAN = alphaNumeric();

      const bt: BinaryTree = new BinaryTree(a);
      bt.add(b);
      bt.add(c);
      bt.add(d);
      bt.add(e);
      bt.add(f);
      bt.add(g);
      bt.root.right.right.right = new Node(h);

      expect(bt.getHeight()).toBe(4);
    });
  });
});
