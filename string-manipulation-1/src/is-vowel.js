/* exported isVowel */

// define a function named isVowel with a single parameter of char - completed
// make the char lowercased - completed
// check if the lowercased value of char matches any vowels (a, e, i, o, u) - completed
// if the value is a vowel, return true - completed
// if the vaue is not a vowel, return false - completed

function isVowel(char) {
  var letter = char.toLowerCase();
  if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    return true;
  } else {
    return false;
  }
}
