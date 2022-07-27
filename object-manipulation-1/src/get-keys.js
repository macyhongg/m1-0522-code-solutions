/* exported getKeys */

// define a function named getKeys with a single parameter of object - completed
// create an emtpy array to hold only keys - completed
// loop through the object - completed
// as it loops, push each key into the array - completed
// return the array containing all keys - completed

function getKeys(object) {
  var keysArr = [];
  for (key in object) {
    keysArr.push(key);
  }
  return keysArr;
}
