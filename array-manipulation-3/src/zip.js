/* exported zip */

// Declare a function named zip with two parameters, first and second (arrays)
// Create an empty array to hold results
// Determine which is has the shorter length and use that for comparison
// Iterate through the shorter array
// Create an empty array to hold pair from first and second array
// @ each index, push value from first and second array into temp array
// Push the temp array into result array
// Return result;

function zip(first, second) {
  var result = [];
  if (first.length > second.length) {
    first.length = second.length
  } else {
    second.length = first.length
  };
  for (let i = 0; i < first.length; i++) {
    var temp = [];
    temp.push(first[i]);
    temp.push(second[i]);
    result.push(temp);
  }
  return result;
};
