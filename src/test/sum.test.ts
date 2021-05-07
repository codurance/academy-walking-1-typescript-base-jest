import { sum } from "../main/sum";
describe("String Calculator", () => {
  it("should return 0 if the string is empty", () => {
    expect(sum("")).toBe(0);
  });

  it("should return 1 if given string is 1", () => {
    expect(sum("1")).toBe(1);
  });
});
