/* exported isUpperCased */

function isUpperCased(word) {
  var upperCased = word.toLocaleUpperCase();
  if (word === upperCased) {
    return true;
  } else {
    return false;
  }
}
