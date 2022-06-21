/* exported dropRight */

function dropRight(array, count) {
  var newArr = [];
  var stop = array.length - count;
  for (let i = 0; i < stop; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
