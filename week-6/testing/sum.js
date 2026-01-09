function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments should be numbers!");
  }

  return a + b;
}

module.exports = { sum };
