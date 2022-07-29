/* exported pick */

// Define a function named pick with two parameters, source and keys
// Create a new object to hold key:value pairs from source if they match keys
// Iterate through each key in source object
// If key is also found in the keys array, add it to the new object
// Return object


// This works when tested in console, but is not showing up on index.html as correct

// function pick(source, keys) {
//   var result = {};
//   for (let i = 0; i < keys.length; i++) {
//     var exist = keys[i] in source;
//     if (exist) {
//       var key = keys[i];
//       result[keys[i]] = source[key];
//     }
//   }
//   return result;
// };

//oposite of omit js code. also works when tested on console, but not in index.html
function pick(source, keys) {
  var obj = {};
  for (var key in source) {
    if (keys.includes(key)) {
      obj[key] = source[key]
    }
  }
  return obj;
}
