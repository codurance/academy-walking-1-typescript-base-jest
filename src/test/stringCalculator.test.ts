import { add } from "../main/stringCalculator";

describe("add method should", () => {
  it("return 0 for empty string", () => {
    const numbers: string = "";

    const result: number = add(numbers);

    expect(result).toBe(0);
  });

  it("return 1 for string '1'", () => {
    const numbers: string = "1";

    const result: number = add(numbers);

    expect(result).toBe(1);
  });

  it("return 3 for string '1,2'", () => {
    const numbers: string = "1,2";

    const result: number = add(numbers);

    expect(result).toBe(3);
  });

  it("return 13 for string '1,2,4,6'", () => {
    const numbers: string = "1,2,4,6";

    const result: number = add(numbers);

    expect(result).toBe(13);
  });

  it("allow new lines instead of commas", () => {
    const expectedResult: number = 13;
    const numbers: string = "1\n2,4,6";

    const result: number = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("different delimiters", () => {
    const expectedResult: number = 3;
    const numbers: string = "//;\n1;2";

    const result: number = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("throw an error for negative numbers", () => {
    const numbers: string = "1,-2,3,-4";

    expect(() => add(numbers)).toThrowError("negatives not allowed: -2, -4");
  });

  it("ignore numbers bigger than 1000", () => {
    const expectedResult: number = 2;
    const numbers: string = "2,1001";

    const result: number = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("allow delimiters of any length", () => {
    const expectedResult: number = 6;
    const numbers: string = "//[***]\n1***2***3";

    const result: number = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("allow multiple delimiters", () => {
    const expectedResult: number = 6;
    const numbers: string = "//[*][%]\n1*2%3";

    const result: number = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("allow multiple delimiters with length longer than one char", () => {
    const expectedResult: number = 6;
    const numbers: string = "//[****][%%]\n1****2%%3";

    const result: number = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("allow multiple delimiters with length longer than one different char", () => {
    const expectedResult: number = 10;
    const numbers: string = "//[**a**][%e%]\n2**a**3%e%5";

    const result: number = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("allow multiple delimiters even the regex characters", () => {
    const expectedResult: number = 10;
    const numbers: string = "//[*+?.^$|()[]][%e%]\n2*+?.^$|()3%e%5";

    const result: number = add(numbers);

    expect(result).toBe(expectedResult);
  });
});
