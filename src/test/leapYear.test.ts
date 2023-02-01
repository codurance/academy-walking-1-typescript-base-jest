import leapYear from "../main/leapYear";

describe("Leap year should", () => {
  it(" return false for common years", () => {
    let year: number = 2001;
    let result: boolean = leapYear(year);
    expect(result).toBe(false);
  });

  it(" be divisible by 4", () => {
    let year: number = 1996;
    let result: boolean = leapYear(year);
    expect(result).toBe(true);
  });

  it(" not be divisible by 100", () => {
    let year: number = 1900;
    let result: boolean = leapYear(year);
    expect(result).toBe(false);
  });

  it(" be divisible by 400", () => {
    let year: number = 2000;
    let result: boolean = leapYear(year);
    expect(result).toBe(true);
  });
});
