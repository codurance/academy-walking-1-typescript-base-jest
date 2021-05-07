import { sum } from "../main/sum";
describe("String Calculator", () => {
  it("should return 0 if the string is empty", () => {
    expect(sum("")).toBe(0);
  });
});
