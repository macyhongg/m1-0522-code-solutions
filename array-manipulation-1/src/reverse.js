/* exported reverse */

function reverse(array) {
  var reversedArr = [];
  for (let i = array.length - 1; i > -1; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}
