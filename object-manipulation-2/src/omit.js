/* exported omit */

// Define a function named omit with two parameters, source and keys
// Create a new object (obj) to hold key:value pairs not listed in keys
// Create a loop for each key in the source object
// If the var key is found in the keys array, do nothing
// If the var key is not found in the keys array, add it to the new object (obj)
// Return new object

function omit(source, keys) {
  var obj = {};
  for (var key in source) {
    if (keys.includes(key)) {
    } else {
      obj[key] = source[key]
    }
  }
  return obj;
};
