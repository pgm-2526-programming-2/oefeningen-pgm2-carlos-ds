const { isPalindrome } = require("./palindrome");
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

describe("isPalindrome", () => {
  it("should return true if text is a palindrome", () => {
    // Arrange
    const text = "kayak";

    // Act
    const result = isPalindrome(text);

    // Assert
    assert.equal(result, true);
  });

  it("should return false if text is not a palindrome", () => {
    // Arrange
    const text = "hello";

    // Act
    const result = isPalindrome(text);

    // Assert
    assert.equal(result, false);
  });

  it("should throw an error if argument is not a string", () => {
    // Arrange
    const argument = 100;

    // Act + Assert
    assert.throws(() => isPalindrome(argument));
  });
});
