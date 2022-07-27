/* exported capitalizeWord */

function capitalizeWord(word) {
  word = word.toLowerCase();
  if (word === 'javascript') {
    return 'JavaScript';
  } else {
    var firstLetter = word.charAt(0).toUpperCase();
    var otherLetters = word.slice(1);
    return firstLetter + otherLetters;
  }
}
