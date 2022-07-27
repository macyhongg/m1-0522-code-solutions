/* exported isLowerCased */

function isLowerCased(word) {
  var lowerCased = word.toLocaleLowerCase();
  if (word === lowerCased) {
    return true;
  } else {
    return false;
  }
}
