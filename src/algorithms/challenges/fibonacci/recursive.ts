// Objective: Find the n-Fibonacci number,
// the nth term of the Fibonacci Sequence,
// often denoted by F(n)

// For example, given the Fibonacci Sequence:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377...
// F(8) = 21
// F(20) = 6765
export const fR = (n: number): number => {
  // TODO: Add error handling

  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fR(n - 1) + fR(n - 2);
};

export default fR; // Preferred
