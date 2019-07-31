import isSorted from './is-sorted';

describe('`isSorted` function', () => {
  it('should return `false` when an array is not sorted', () => {
    const sorted = [0, 1, 2, 3, 4, 5];

    const result = isSorted(sorted);

    expect(result).toBeTruthy();
  });

  it('should return `true` when an array is sorted', () => {
    const unsorted = [0, 1, 100, 3, 4, 5];

    const result = isSorted(unsorted);

    expect(result).toBeFalsy();
  });
});
