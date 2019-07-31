// Helper function
const isSorted = (arr: number[]): boolean => {
  let bool = true;
  for (let i: number = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      bool = false;
    }
  }
  return bool;
};

export default isSorted;
