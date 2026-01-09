// palindroom: tekst die omgekeerd dezelfde tekst is bv. "radar", "noon", "kayak" ...
function isPalindrome(text) {
  // return true if palindrome
  // return false if not
  if (typeof text !== "string") {
    throw new Error("The argument should be a string!");
  }

  const reversedText = text.split("").reverse().join("");
  return reversedText === text;
}

module.exports = { isPalindrome };
