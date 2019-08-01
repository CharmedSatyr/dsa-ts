import fR from '../recursive';

describe('`f`', () => {
  it('should return a `0` to a `0` argument', () => {
    const resultR: number = fR(0);

    expect(resultR).toBe(0);
  });

  it('should return a `1` to a `1` argument', () => {
    const resultR: number = fR(1);

    expect(resultR).toBe(1);
  });

  it('should return a `1` to a `2` argument', () => {
    const resultR: number = fR(2);

    expect(resultR).toBe(1);
  });

  it('should return the correct Fibonacci number for its index `n`', () => {
    const sequence = [
      { n: 0, f: 0 },
      { n: 1, f: 1 },
      { n: 2, f: 1 },
      { n: 3, f: 2 },
      { n: 4, f: 3 },
      { n: 5, f: 5 },
      { n: 6, f: 8 },
      { n: 7, f: 13 },
      { n: 8, f: 21 },
      { n: 9, f: 34 },
      { n: 10, f: 55 },
      { n: 11, f: 89 },
      { n: 12, f: 144 },
    ];

    sequence.forEach(pair => {
      expect(fR(pair.n)).toBe(pair.f);
    });
    expect.assertions(sequence.length);
  });
});
