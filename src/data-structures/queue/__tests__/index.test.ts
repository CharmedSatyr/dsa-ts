import { random } from 'faker';

import { TAN, TEntry } from '../../../declarations/types';

import Queue from '../';

const { alphaNumeric } = random;

describe('Queue', () => {
  describe('`constructor`', () => {
    it('can instantiate a queue without data', () => {
      const q: Queue = new Queue();
      expect(q).toBeDefined();
    });

    it('should have a `null` `front` property', () => {
      const q: Queue = new Queue();
      expect(q.front).toBeNull();
    });

    it('should have a `null` `back` property', () => {
      const q: Queue = new Queue();
      expect(q.back).toBeNull();
    });
  });

  describe('`enqueue` method', () => {
    it('can add a node', () => {
      const q: Queue = new Queue();
      const data: TAN = alphaNumeric();

      q.enqueue(data);

      expect(q.front.data).toBe(data);
    });

    it('can traverse front to back', () => {
      const q: Queue = new Queue();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();

      q.enqueue(a);
      q.enqueue(b);

      expect(q.front.data).toBe(a);
      expect(q.front.next.data).toBe(b);
    });
  });

  describe('`dequeue` method', () => {
    it('should return `null` when dequeueing an empty queue', () => {
      const q: Queue = new Queue();
      const result: TEntry = q.dequeue();

      expect(result).toBeNull();
    });

    it('can dequeue the front node', () => {
      const q: Queue = new Queue();
      const a: TAN = alphaNumeric();

      q.enqueue(a);

      expect(q.dequeue()).toBe(a);
      expect(q.peek()).toBeNull();
    });

    it('can dequeue the front node when the queue is longer than 1 node', () => {
      const q: Queue = new Queue();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();

      q.enqueue(a);
      q.enqueue(b);

      expect(q.dequeue()).toBe(a);
      expect(q.dequeue()).toBe(b);
      expect(q.peek()).toBeNull();
    });
  });

  describe('`peek` method', () => {
    it('can peek on the front node', () => {
      const q: Queue = new Queue();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();

      expect(q.peek()).toBeNull();

      q.enqueue(a);

      expect(q.peek()).toBe(a);

      q.enqueue(b);

      expect(q.peek()).toBe(a);
    });
  });
});
