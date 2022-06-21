/* exported includes */

function includes(array, value) {
  var result;
  for (let i = 0; i < array.length; i++) {
    var current = array[i];
    if (current === value) {
      var result = true;
      return true;
    } else {
      var result = false;
    }
  }
  if (array.length == 0) {
    var result = false
  }
  return result;
}
