/* exported flatten */

function flatten(array) {
  var result = {};
  for (let i = 0; i < array.length; i++) {
    if (array.isArray(array[i])) {
      for (let x = 0; i < array[i].length; i++) {

      }
    } else {
      result.push(array[i]);
    }
    return result;
  }
