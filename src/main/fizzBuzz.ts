export const fizzBuzz = (number: number): string => {
  const isMultipleOf3 = isMultipleOf(3, number);
  const isMultipleOf5 = isMultipleOf(5, number);

  if (isMultipleOf3 && isMultipleOf5) return "FizzBuzz";

  if (isMultipleOf3) return "Fizz";

  if (isMultipleOf5) return "Buzz";

  return number.toString();
};

const isMultipleOf = (divisor: number, inputNumber: number): boolean => {
  return inputNumber % divisor === 0;
};
