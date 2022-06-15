/* exported initial */

// declare a function named initial with one parameter, array - completed
// create a new, empty array to hold all elements except the last - completed
// iterate through each element of array, skipping the last one - completed
// push all other elements in to the new array - completed
// return the new array - completed

function initial(array) {
  var skipLast = [];
  for (let i = 0; i < array.length-1; i++) {
    skipLast.push(array[i]);
  }
  return skipLast;
}
