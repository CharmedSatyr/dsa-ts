import { random } from 'faker';

import { TAN, TEntry } from '../declarations/types';
import Queue from '../queue';

const { alphaNumeric } = random;

describe('Queue', () => {
  describe('`constructor`', () => {
    it('can instantiate a queue without data', () => {
      const q: Queue = new Queue();
      expect(q).toBeDefined();
    });

    it('should have a `front` property', () => {
      const q: Queue = new Queue();
      expect(q.front).toBeNull();
    });

    it('should have a `back` property', () => {
      const q: Queue = new Queue();
      expect(q.back).toBeNull();
    });

    it('can instantiate a queue with data in a node set at front and back', () => {
      const data: TAN = alphaNumeric();
      const q: Queue = new Queue(data);
      expect(q).toBeDefined();

      expect(q.front.data).toBe(data);
      expect(q.back.data).toBe(data);
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
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();

      const q: Queue = new Queue(a);
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
      const a: TAN = alphaNumeric();
      const q: Queue = new Queue(a);

      expect(q.dequeue()).toBe(a);

      expect(q.peek()).toBeNull();
    });

    it('can dequeue the front node when the queue is longer than 1 node', () => {
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();

      const q: Queue = new Queue(a);
      q.enqueue(b);

      expect(q.dequeue()).toBe(a);
      expect(q.dequeue()).toBe(b);
      expect(q.peek()).toBeNull();
    });
  });

  describe('`peek` method', () => {
    it('can peek on the front node', () => {
      const q: Queue = new Queue();
      expect(q.peek()).toBeNull();

      const a: TAN = alphaNumeric();
      q.enqueue(a);
      expect(q.peek()).toBe(a);

      const b: TAN = alphaNumeric();
      q.enqueue(b);
      expect(q.peek()).toBe(a);
    });
  });
});
