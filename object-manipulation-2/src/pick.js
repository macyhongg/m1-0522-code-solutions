/* exported pick */

// Define a function named pick with two parameters, source and keys
// Create a new object to hold key:value pairs from source if they match keys
// Iterate through each key in source object
// If the value of the source key is undefined, do not add it to the new object
// If key is also found in the keys array, add it to the new object
// Return object

function pick(source, keys) {
  var obj = {};
  for (var key in source) {
    if (source[key] !== undefined){
      if (keys.includes(key)) {
        obj[key] = source[key]
      }
    }
  }
  return obj;
}
