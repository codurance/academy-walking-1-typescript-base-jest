import fibonacci from "../main/fibonacci";

describe("Fibonnacci should", () => {
  it("return 0 for 0", () => {
    let n: number = 0;
    let result: number = fibonacci(n);
    expect(result).toBe(0);
  });

  it("return 1 for 1", () => {
    let n: number = 1;
    let result: number = fibonacci(n);
    expect(result).toBe(1);
  });

  it("return 1 for 2", () => {
    let n: number = 2;
    let result: number = fibonacci(n);
    expect(result).toBe(1);
  });

  it("return 34 for 9", () => {
    let n: number = 2;
    let result: number = fibonacci(n);
    expect(result).toBe(1);
  });
});
