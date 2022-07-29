/* exported unique */

// iterate
// if it is not in the array, push it in
// if it is already in the array, skip it

function unique(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (!(result.includes(array[i]))) {
      result.push(array[i])
    }
  }
  return result;
}
