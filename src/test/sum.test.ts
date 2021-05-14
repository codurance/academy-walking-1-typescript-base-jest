import { sum } from "../main/sum";
describe("String Calculator", () => {
  it("should return 0 if the string is empty", () => {
    expect(sum("")).toBe(0);
  });

  it.each(["1", "3", "4"])(
    "should return number if passed a string",
    (input) => {
      expect(sum(input)).toBe(parseInt(input));
    }
  );

  it.each([
    ["1,2", 3],
    ["2,2", 4],
    ["2,3", 5],
  ])("should return the sum of 2 numbers", (input, output) => {
    expect(sum(input)).toBe(output);
  });

  it.each([
    ["1,2,3", 6],
    ["1,2,3,4", 10],
    ["1,2,3,4,5", 15],
  ])("should return the sum of multiple numbers", (input, output) => {
    expect(sum(input)).toBe(output);
  });

  it.each([
    ["1\n2,3", 6],
    ["1\n2\n3", 6],
    ["1\n2\n3,4", 10],
  ])(
    "should return a sum of multiple numbers shaperated by new lines and commas",
    (input, output) => {
      expect(sum(input)).toBe(output);
    }
  );

  it("should return a sum of multiple numbers with the ; delimiter", () => {
    expect(sum("//;\n1;2")).toBe(3);
  });
});
