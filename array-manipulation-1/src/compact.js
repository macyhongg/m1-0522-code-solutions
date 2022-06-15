/* exported compact */

function compact(array) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    var value = array[i];
    if (value) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
