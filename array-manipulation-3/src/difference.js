/* exported difference */

// Declare a function named difference with two parameters, first and second
// Create an empty array to hold results
// Iterate through the first array
// If it is not found at all within the second array, include in new array
// Iterate through the second array
// If it is not found at all within the first, include in new array as well
// Return result array

function difference (first, second) {
  var result = [];
  for (let i = 0; i < first.length; i++) {
    if (!(second.includes(first[i]))) {
      result.push(first[i]);
    }
  }
  for (let x = 0; x < second.length; x++) {
    if (!(first.includes(second[x]))) {
      result.push(second[x]);
    }
  }
  return result;
}
