import { isBlankOrEmpty } from "../../lib/utils/StringUtils";

describe("isBlankOrEmpty", () => {
  it("should return true for null", () => {
    expect(isBlankOrEmpty(null)).toBe(true);
  });

  it("should return true for undefined", () => {
    expect(isBlankOrEmpty(undefined)).toBe(true);
  });

  it("should return true for an empty string", () => {
    expect(isBlankOrEmpty("")).toBe(true);
  });

  it("should return true for a string with only spaces", () => {
    expect(isBlankOrEmpty("   ")).toBe(true);
  });

  it("should return false for a non-empty string", () => {
    expect(isBlankOrEmpty("hello")).toBe(false);
  });

  it("should return false for a string with non-space characters", () => {
    expect(isBlankOrEmpty("  hello  ")).toBe(false);
  });

  it("should return false for non-string values", () => {
    expect(isBlankOrEmpty(123)).toBe(false);
    expect(isBlankOrEmpty({})).toBe(false);
    expect(isBlankOrEmpty([])).toBe(false);
  });
});
