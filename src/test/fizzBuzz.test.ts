import { fizzBuzz } from "../main/fizzBuzz";

describe("fizzBuzz test", () => {
  it.each([[1], [2], [4]])(
    "should return the given number as a string if not a multiple of either 3 or 5",
    (number) => {
      expect(fizzBuzz(number)).toBe(number.toString());
    }
  );

  it.each([[3], [6], [9]])(
    "should return Fizz for multiples of 3",
    (number) => {
      expect(fizzBuzz(number)).toBe("Fizz");
    }
  );

  it.each([[5], [10], [20]])(
    "should return Buzz for multiples of 5",
    (number) => {
      expect(fizzBuzz(number)).toBe("Buzz");
    }
  );

  it.each([[15], [30], [45]])(
    "should return FizzBuzz for multiples of 3 and 5",
    (number) => {
      expect(fizzBuzz(number)).toBe("FizzBuzz");
    }
  );
});
