// Objective: Find the n-Fibonacci number,
// the nth term of the Fibonacci Sequence,
// often denoted by F(n)

// For example, given the Fibonacci Sequence:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377...
// F(8) = 21
// F(20) = 6765
const f = (n: number): number => {
  // TODO: Add error handling

  let [a, b] = [0, 1];

  while (n-- >= 1) {
    [a, b] = [b, a + b];
  }

  return a;
};

export default f; // Preferred
