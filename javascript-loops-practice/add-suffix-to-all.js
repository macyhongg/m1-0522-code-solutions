/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var appendedArray = [];
  for (let i = 0; i < words.length; i++) {
    var appendedWord = words[i] + suffix;
    appendedArray.push(appendedWord);
  }
  return appendedArray;
}
