// Write a function which accepts an array of people, and returns who liked it
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in "and 2 others" simply increases.
function likes(people) {
  if (!Array.isArray(people)) {
    throw new Error("Argument must be an array!");
  }

  if (people.length === 0) {
    return "no one likes this";
  } else if (people.length === 1) {
    return `${people[0]} likes this`;
  } else if (people.length === 2) {
    return `${people[0]} and ${people[1]} like this`;
  } else if (people.length === 3) {
    return `${people[0]}, ${people[1]} and ${people[2]} like this`;
  } else {
    return `${people[0]}, ${people[1]} and ${
      people.length - 2
    } others like this`;
  }
}

module.exports = { likes };
