/* exported defaults */

// Define a function named defaults with two parameters, target and source
// Iterate through each key in source object
// If var key is not target object, add the key:value pair to target

function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
};
