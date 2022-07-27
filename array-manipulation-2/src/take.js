/* exported take */

// define a function named take with two parameters, array and count - completed
// create a new array to hold results - completed
// iterate through the array - completed
// push each element into the new array - completed
// stop when the index reaches the value of count - completed
// return the new array - completed
// if the array is empty, return an emtpy array - completed

function take(array, count) {
  var newArr = [];
  for (let i = 0; i < count; i++) {
    newArr.push(array[i])
  }
  let result = newArr;
  if (array.length === 0) {
    return array;
  } else {
    return result;
  }
}
