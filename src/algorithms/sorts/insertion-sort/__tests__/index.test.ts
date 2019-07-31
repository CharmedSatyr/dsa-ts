import { random } from 'faker';

import insertionSort from '../';
import isSorted from '../../is-sorted';

const randNum = random.number;

describe('insertionSort', () => {
  it('should sort a randomly generated unsorted array', () => {
    const arr: number[] = [
      randNum(),
      randNum(),
      randNum(),
      randNum(),
      randNum(),
    ];

    expect(isSorted(insertionSort(arr))).toBeTruthy();
  });

  it('should return a sorted array with no changes', () => {
    const arr = [1, 1, 2, 3, 4, 5, 99, 1000, 10021];

    expect(insertionSort(arr)).toEqual(arr);
  });

  it('should return a backwards-sorted array in sorted order', () => {
    const backwards = [12121, 1221, 99, 88, 77, 66, 44, 22, 1, 0.123];
    const forwards = [...backwards].reverse();

    const result = insertionSort(backwards);

    expect(isSorted(result)).toBeTruthy();
    expect(result).toEqual(forwards);
  });

  it('should return an empty array argument unchanged', () => {
    const empty: number[] = [];

    expect(insertionSort(empty)).toEqual(empty);
  });

  it('should return a single-element array unchanged', () => {
    const num: number[] = [randNum()];

    expect(insertionSort(num)).toEqual(num);
  });
});
