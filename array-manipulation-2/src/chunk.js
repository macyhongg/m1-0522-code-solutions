/* exported chunk */


// define a function named chunk with two parameters, array and size - completed
// create a new array that will hold all sub-arrays - completed
// create the first sub-array, according to the value of size - completed
// create another sub-array according to the value of size, starting at the index of where the previous sub-array left off - completed

function chunk(array, size) {
  var allArrays = [];
  for (let i = 0; i < array.length; i += size) {
    let aChunk = array.slice(i, i + size);
    allArrays.push(aChunk);
  }
  return allArrays;
}
