import { convertToRoman } from "../main/romanNumbers";

describe("convertToRoman should", () => {
  it("throw an error if negative number is provided", () => {
    const number: number = -1;

    expect(() => convertToRoman(number)).toThrowError(
      "negative numbers not allowed"
    );
  });

  it("return I for 1", () => {
    const number: number = 1;

    const result: string = convertToRoman(number);

    expect(result).toBe("I");
  });

  it("return II for 2", () => {
    const number: number = 2;

    const result: string = convertToRoman(number);

    expect(result).toBe("II");
  });

  it("return III for 3", () => {
    const number: number = 3;

    const result: string = convertToRoman(number);

    expect(result).toBe("III");
  });

  it("return IV for 4", () => {
    const number: number = 4;

    const result: string = convertToRoman(number);

    expect(result).toBe("IV");
  });

  it("return V for 5", () => {
    const number: number = 5;

    const result: string = convertToRoman(number);

    expect(result).toBe("V");
  });

  it("return VI for 6", () => {
    const number: number = 6;

    const result: string = convertToRoman(number);

    expect(result).toBe("VI");
  });

  it("return IX for 9", () => {
    const number: number = 9;

    const result: string = convertToRoman(number);

    expect(result).toBe("IX");
  });

  it("return X for 10", () => {
    const number: number = 10;

    const result: string = convertToRoman(number);

    expect(result).toBe("X");
  });

  it("return XL for 40", () => {
    const number: number = 40;

    const result: string = convertToRoman(number);

    expect(result).toBe("XL");
  });

  it("return L for 50", () => {
    const number: number = 50;

    const result: string = convertToRoman(number);

    expect(result).toBe("L");
  });

  it("return XCIX for 99", () => {
    const number: number = 99;

    const result: string = convertToRoman(number);

    expect(result).toBe("XCIX");
  });

  it("return C for 100", () => {
    const number: number = 100;

    const result: string = convertToRoman(number);

    expect(result).toBe("C");
  });

  it("return CD for 400", () => {
    const number: number = 400;

    const result: string = convertToRoman(number);

    expect(result).toBe("CD");
  });

  it("return D for 500", () => {
    const number: number = 500;

    const result: string = convertToRoman(number);

    expect(result).toBe("D");
  });

  it("return CMXCIX for 999", () => {
    const number: number = 999;

    const result: string = convertToRoman(number);

    expect(result).toBe("CMXCIX");
  });

  it("return M for 1000", () => {
    const number: number = 1000;

    const result: string = convertToRoman(number);

    expect(result).toBe("M");
  });

  it("return MMMCMXLIX for 3949", () => {
    const number: number = 3949;

    const result: string = convertToRoman(number);

    expect(result).toBe("MMMCMXLIX");
  });
});
