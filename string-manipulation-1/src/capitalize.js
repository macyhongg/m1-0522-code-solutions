/* exported capitalize */

function capitalize(word) {
  var firstLetter = word.charAt(0).toUpperCase();
  var remainder = word.substring(1);
  return firstLetter + remainder.toLowerCase();
  }
