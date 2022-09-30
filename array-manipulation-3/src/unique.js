/* exported unique */

// Declare a function named unique with one parameter, array
// Create an empty array to hold results
// Iterate through array
// For each, determine whether it can be found elsewhere in the array
// If it can not be found repeated, push it in to result array
// If it is already in the array, skip it
// Return result array

function unique(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (!(result.includes(array[i]))) {
      result.push(array[i])
    }
  }
  return result;
}
