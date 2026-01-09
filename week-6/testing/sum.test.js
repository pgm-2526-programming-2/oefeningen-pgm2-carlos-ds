const { sum } = require("./sum");
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

describe("sum", () => {
  it("should return the sum of two numbers", () => {
    // Arrange
    const a = 5;
    const b = 10;

    // Act
    const result = sum(a, b);

    // Assert
    assert.equal(result, 15);
  });

  it("should throw an error if one or both arguments is not a number", () => {
    assert.throws(() => isPalindrome(100));
  });
});
