/***
 * @function
 * @name insertionSort
 * @param arr {array} An array of numbers
 */
const insertionSort = (arr: number[]): number[] => {
  // Looping from the second element to the end
  for (let i: number = 1; i < arr.length; i++) {
    // Set a temp variable equal to the value at that index
    const temp: number = arr[i];

    // Set an inner loop that begins at the index before and
    // continues while the inner loop meets two conditions:
    // 1) It's dealing with values that exist in the array
    // 2) the temp value is less than the inner loop value
    let j: number = i - 1;

    while (j >= 0 && temp < arr[j]) {
      // Swap the value at j+1 with the value at j
      arr[j + 1] = arr[j];
      arr[j] = temp;

      // Decrement the start of the inner loop
      j--;
    }
  }
  return arr;
};

export default insertionSort;
