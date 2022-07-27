/* exported tail */

// define a function named tail with a single parameter of array - completed
// create an empty array to hold values that will be returned - completed
// begin a for loop to iterate through each element, skipping the first element - completed
// push all other elements in to the new array - completed
// return the array - completed

function tail(array) {
  var skipFirst = [];
  for (let i = 1; i < array.length; i++) {
    skipFirst.push(array[i]);
  }
  return skipFirst;
}
