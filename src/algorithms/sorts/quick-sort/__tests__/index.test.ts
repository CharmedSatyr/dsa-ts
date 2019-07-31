import { random } from 'faker';

import { ISetPivot } from '../../../../declarations/interfaces';

import quickSort, { setPivot } from '../';

import isSorted from '../../is-sorted';

const randNum = random.number;

describe('setPivot', () => {
  it('should not modify the argument `array`', () => {
    const original: number[] = [randNum(), randNum(), randNum(), randNum()];
    const copy: number[] = [...original];
    setPivot(copy);

    expect(copy).toEqual(original);
  });

  it('should return an object with an `arr` property', () => {
    const array: number[] = [randNum(), randNum(), randNum(), randNum()];
    const result: ISetPivot = setPivot(array);

    expect(result).toMatchObject({ arr: expect.any(Array) });
  });

  it('should return an object with a `pivot` property', () => {
    const array: number[] = [randNum(), randNum(), randNum(), randNum()];
    const result: ISetPivot = setPivot(array);

    expect(result).toMatchObject({ pivot: expect.any(Number) });
  });

  it('should return an object with an `arr` property one index shorter than the argument `array`', () => {
    const array: number[] = [randNum(), randNum(), randNum(), randNum()];
    const result: ISetPivot = setPivot(array);

    expect(result.arr.length).toBe(array.length - 1);
  });

  it('should return an object with a `pivot` property removed from the `array` copy `arr`', () => {
    const array: number[] = [randNum(), randNum(), randNum(), randNum()];
    const result: ISetPivot = setPivot(array);

    expect(result.arr.includes(result.pivot)).toBeFalsy();
    expect(result.arr.length).toBe(array.length - 1);
  });
});

describe('quickSort', () => {
  it('should sort a randomly generated unsorted array', () => {
    const arr: number[] = [
      randNum(),
      randNum(),
      randNum(),
      randNum(),
      randNum(),
    ];
    expect(isSorted(quickSort(arr))).toBeTruthy();
  });

  it('should return a sorted array with no changes', () => {
    const original: number[] = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];
    const copy: number[] = [...original];

    const result: number[] = quickSort(copy);

    expect(result).toEqual(original);
  });

  it('should return a backwards-sorted array in sorted order', () => {
    const backwards: number[] = [12121, 1221, 99, 88, 77, 66, 44, 22, 1, 0.123];
    const forwards: number[] = [...backwards].reverse();
    expect(quickSort(backwards)).toEqual(forwards);
  });

  it('should return an empty array argument unchanged', () => {
    const empty: number[] = [];
    expect(quickSort(empty)).toEqual(empty);
  });

  it('should return a single-element array unchanged', () => {
    const num: number[] = [randNum()];
    expect(quickSort(num)).toEqual(num);
  });
});
