/* exported difference */

// iterate through the first array
// if it is not found at all within the second, include in new array
// interate through the second array
// if it is not found at all within the first, include in new array

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
