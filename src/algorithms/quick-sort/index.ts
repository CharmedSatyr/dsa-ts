import { ISetPivot } from '../../declarations/interfaces';

export const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

/** Choose a random pivot point */
export const setPivot = (array: number[]): ISetPivot => {
  const arr: number[] = [...array];
  const randomIndex: number = randomInt(0, arr.length - 1);
  const pivot: number = arr.splice(randomIndex, 1)[0];
  return { arr, pivot };
};

const quickSort = (array: number[]): number[] => {
  // Return the array if it's too short to sort
  if (array.length <= 1) {
    return array;
  }

  // Choose a random pivot point
  const { arr, pivot } = setPivot(array);

  // Make empty arrays for values <= and > pivot value
  const lessEq: number[] = [];
  const greater: number[] = [];

  // Loop through arr, separating values by comparison to pivot
  arr.forEach((n: number): number =>
    n <= pivot ? lessEq.push(n) : greater.push(n)
  );

  // Return recursively sorted values
  return [...quickSort(lessEq), pivot, ...quickSort(greater)];
};

export default quickSort;
