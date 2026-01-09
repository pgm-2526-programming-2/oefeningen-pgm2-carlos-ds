const { likes } = require("./likes");
const { describe, it } = require("node:test");
const assert = require("assert");

describe("likes", () => {
  it("should return the expected string based on the data in the array", () => {
    assert.equal(likes([]), "no one likes this");
    assert.equal(likes(["Peter"]), "Peter likes this");
    assert.equal(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
    assert.equal(
      likes(["Max", "John", "Mark"]),
      "Max, John and Mark like this"
    );
    assert.equal(
      likes(["Alex", "Jacob", "Mark", "Max"]),
      "Alex, Jacob and 2 others like this"
    );
  });

  it("should throw an error when the argument is not an array", () => {
    assert.throws(() => likes(null));
  });
});
