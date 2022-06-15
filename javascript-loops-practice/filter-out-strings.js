/* exported filterOutStrings */

function filterOutStrings(values) {
  var noStrings = [];
  for (let i = 0; i < values.length; i++) {
    var currentVal = values[i];
    console.log(currentVal)
    if (typeof currentVal === 'number') {
      noStrings.push(currentVal);
    }
  }
  return noStrings;
}
