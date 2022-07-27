/* exported takeRight */


// define a function named takeRight with two parameters, array and count - complete
// determine where to start taking from by delcaring a variable that is the length of the array, subtracted by the value of count - complete
// if the start variable is less than 0, assign 0 to it instead - complete
// using the start variable as the starting index, split the array - complete

function takeRight(array, count) {
  var start = array.length - count;
  if (start < 0) {
    start = 0;
  }
  return array.slice(start);
}
