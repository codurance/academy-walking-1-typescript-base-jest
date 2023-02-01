const fibonacci = (n: number): number => {
  let isFibonacciExpection: boolean = n < 2;

  if (isFibonacciExpection) return n;

  return normalFibonacci(n);
};

const normalFibonacci = (n: number): number => {
  const previousN: number = n - 1;
  const previousPreviousN: number = n - 2;
  return fibonacci(previousN) + fibonacci(previousPreviousN);
};

export default fibonacci;
