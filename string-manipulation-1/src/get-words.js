/* exported getWords */

function getWords(string) {
  var split = string.split(' ');
  if (string == '') {
    var empty = [];
    return empty;
  } else {
    return split;
  }
}
