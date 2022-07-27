/* exported numVowels */

function numVowels(string) {
  var word = string.toLowerCase();
  let count = 0;
  for (i = 0; i < string.length; i++) {
    var letter = word[i]
    console.log(letter)
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
      count += 1;
      console.log(count)
    }
  }
  return count;
}
