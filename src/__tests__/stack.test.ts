import { random } from 'faker';

import { TAN, TData, TEntry } from '../declarations/types';
import Stack from '../stack';

const { alphaNumeric } = random;

const log: jest.SpyInstance = jest
  .spyOn(global.console, 'log')
  .mockImplementation(() => undefined);

describe('Stack', () => {
  describe('constructor', () => {
    it('should be possible to instantiate a stack', () => {
      const stack: Stack = new Stack();

      expect(stack).toBeDefined();
    });
  });

  describe('`push` method', () => {
    it('should add a node', () => {
      const stack: Stack = new Stack();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();

      stack.push(a);
      stack.push(b);
      stack.push(c);

      expect(stack.top && stack.top.data).toBe(c);
    });
  });

  describe('`pop` method', () => {
    it('should return `null` on an empty stack', () => {
      const stack: Stack = new Stack();
      const result: TEntry = stack.pop();

      expect(result).toBeNull();
    });

    it('should assign the `top` to `null` if the stack has been emptied', () => {
      const stack: Stack = new Stack();
      const a: TAN = alphaNumeric();

      stack.push(a);

      stack.pop();
      expect(stack.top).toBeNull();
    });

    it('should return the value of the `top` node', () => {
      const stack: Stack = new Stack();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();

      stack.push(a);
      stack.push(b);
      stack.push(c);

      const result: TEntry = stack.pop();
      expect(result && result.data).toBe(c);
    });

    it('should remove the `top` node', () => {
      const stack: Stack = new Stack();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();

      stack.push(a);
      stack.push(b);
      stack.push(c);
      stack.pop();

      expect(stack.top && stack.top.data).toBe(b);
    });
  });

  describe('`print` method', () => {
    it('should return an empty array if the `top` does not exist', () => {
      const stack: Stack = new Stack();
      const result: TData[] = stack.print();
      const expected: undefined[] = [];
      expect(result).toEqual(expected);
    });

    it('should print all values in the stack in LIFO order', () => {
      const stack: Stack = new Stack();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      const d: TAN = alphaNumeric();
      const e: TAN = alphaNumeric();

      stack.push(a);
      stack.push(b);
      stack.push(c);
      stack.push(d);
      stack.push(e);

      const result: TData[] = stack.print();
      const expected: TAN[] = [e, d, c, b, a];

      expect(result).toEqual(expected);
    });

    it('should log all values in the stack in LIFO order', () => {
      log.mockClear();
      const stack: Stack = new Stack();
      const a: TAN = alphaNumeric();
      const b: TAN = alphaNumeric();
      const c: TAN = alphaNumeric();
      const d: TAN = alphaNumeric();
      const e: TAN = alphaNumeric();

      stack.push(a);
      stack.push(b);
      stack.push(c);
      stack.push(d);
      stack.push(e);

      stack.print();

      const expected: TAN[] = [e, d, c, b, a];
      expect(log).toHaveBeenCalledWith(expected);

      log.mockClear();
    });
  });
});
