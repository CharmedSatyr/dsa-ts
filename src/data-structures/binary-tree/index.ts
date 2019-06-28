import { TData, TEntry } from '../../declarations/types';

import Node from '../node';
import Queue from '../queue';

/**
 * A Binary Tree with a `root`. It can be instantitated with Node `data`.
 *
 * @class BinaryTree
 */
class BinaryTree {
  public root: TEntry;
  constructor(data?: TEntry) {
    if (data !== null && data !== undefined) {
      this.root = new Node(data);
    } else {
      this.root = null;
    }
  }

  /**
   * Add a new node to the tree in a balanced way
   *
   * @param data Instantiates a new node
   * @memberof BinaryTree
   */
  public add(data: TData): void {
    const q: Queue = new Queue();

    let current: TEntry = this.root;

    if (!current) {
      this.root = new Node(data);
      return;
    }

    q.enqueue(current);

    while (q.peek()) {
      current = q.dequeue();

      if (!current.left) {
        current.left = new Node(data);
        return;
      }

      if (!current.right) {
        current.right = new Node(data);
        return;
      }

      q.enqueue(current.left);
      q.enqueue(current.right);
    }
  }

  /**
   * Get tree data in breadth-first traversal order
   *
   *      a
   *     ^ ^
   *    /   \
   *   b     c
   *  / \   /  \
   * d   e f    g
   *
   * => [a, b, c, d, e, f, g]
   *
   * @param root The root of the tree. Defaults to `this.root`
   * @memberof BinaryTree
   */
  public breadthFirstOrder(root: TEntry = this.root) {
    if (!root || root.data === null || root.data === undefined) {
      return null;
    }

    let current: TEntry = root;
    const q: Queue = new Queue(current);
    const data: TData = [];

    while (q.peek()) {
      current = q.dequeue();
      data.push(current.data);

      if (current.left) {
        q.enqueue(current.left);
      }

      if (current.right) {
        q.enqueue(current.right);
      }
    }

    return data;
  }

  /**
   * Get tree data in pre-order traversal order
   *
   *      a
   *     ^ ^
   *    /   \
   *   b     c
   *  / \   /  \
   * d   e f    g
   *
   * ==> [a, b, d, e, c, f, g]
   *
   * @param root The root of the tree. Defaults to `this.root`
   * @param data The data array returned. Defaults to an empty array
   * @memberof BinaryTree
   */
  public preOrder(root: TEntry = this.root, data: TData = []): TData {
    if (!root || root.data === null || root.data === undefined) {
      return null;
    }

    data.push(root.data);

    if (root.left) {
      this.preOrder(root.left, data);
    }

    if (root.right) {
      this.preOrder(root.right, data);
    }

    return data;
  }

  /**
   * Get tree data in in-order traversal order
   *
   *      a
   *     ^ ^
   *    /   \
   *   b     c
   *  / \   /  \
   * d   e f   g
   *
   * ==> [d, b, e, a, f, c, g]
   *
   * @param root The root of the tree. Defaults to `this.root`
   * @param data The data array returned. Defaults to an empty array
   * @memberof BinaryTree
   */
  public inOrder(root: TEntry = this.root, data: TData = []): TData {
    if (!root || root.data === null || root.data === undefined) {
      return null;
    }

    if (root.left) {
      this.inOrder(root.left, data);
    }

    data.push(root.data);

    if (root.right) {
      this.inOrder(root.right, data);
    }

    return data;
  }

  /**
   * Get tree data in post-order traversal order
   *
   *      a
   *     ^ ^
   *    /   \
   *   b     c
   *  / \   /  \
   * d   e f   g
   *
   * ==> [d, e, b, f, g, c, a];
   *
   * @param root The root of the tree. Defaults to `this.root`
   * @param data The data array returned. Defaults to an empty array
   * @memberof BinaryTree
   */
  public postOrder(root: TEntry = this.root, data: TData = []): TData {
    if (!root || root.data === null || root.data === undefined) {
      return null;
    }

    if (root.left) {
      this.postOrder(root.left, data);
    }

    if (root.right) {
      this.postOrder(root.right, data);
    }

    data.push(root.data);

    return data;
  }

  /**
   * Get the height of the tree
   *
   * @param root The root of the tree. Defaults to `this.root`
   * @memberof BinaryTree
   */
  public getHeight(node: TEntry = this.root): number {
    if (!node || node.data === null || node.data === undefined) {
      return 0;
    }

    let leftSubtree = 0;
    let rightSubtree = 0;

    if (node.left) {
      leftSubtree = this.getHeight(node.left);
    }

    if (node.right) {
      rightSubtree = this.getHeight(node.right);
    }

    if (leftSubtree > rightSubtree) {
      const leftHeight = leftSubtree + 1;
      return leftHeight;
    } else {
      const rightHeight = rightSubtree + 1;
      return rightHeight;
    }
  }

  /**
   * Get the maximum value of the data in the tree's nodes
   *
   * @param root The root of the tree. Defaults to `this.root`
   * @memberof BinaryTree
   */
  public findMaximumValue(root: TEntry = this.root): null | number {
    if (!root || root.data === null || root.data === undefined) {
      return null;
    }

    let current: TEntry = root;
    const q: Queue = new Queue();
    let max: TData = current.data;

    q.enqueue(current);

    while (q.peek()) {
      current = q.dequeue();
      if (current.data > max) {
        max = current.data;
      }

      if (current.left) {
        q.enqueue(current.left);
      }

      if (current.right) {
        q.enqueue(current.right);
      }
    }

    return max;
  }
}

export default BinaryTree;
