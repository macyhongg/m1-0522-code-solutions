/* exported lastChars */

function lastChars(length, string) {
  if (length > string.length) {
    return string
  } else {
  var newString = string.slice(string.length - length)
  return newString;
  }
}
