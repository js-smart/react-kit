import { parseNumber } from "../../lib/utils/NumberUtils";

describe("parseNumber", () => {
  it("should return a number when a valid string is provided", () => {
    expect(parseNumber("123")).toBe(123);
  });

  it("should return NaN when an invalid string is provided", () => {
    expect(parseNumber("abc")).toBeNaN();
  });

  it("should return undefined when null is provided", () => {
    expect(parseNumber(null)).toBeUndefined();
  });

  it("should return undefined when undefined is provided", () => {
    expect(parseNumber(undefined)).toBeUndefined();
  });
});
