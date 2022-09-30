/* exported flatten */

function flatten(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    if (Array.isArray(array[i])) {
      console.log(array[i], 'is an array')
      for (let x = 0; i < array[i].length; i++) {
        console.log('flattened to: ', array[i][x])
        result.push(array[i][x]);
      }
    } else {
      console.log('not array: ', array[i])
      result.push(array[i]);
    }
  }
  console.log(result)
};

flatten([[1], [2], 3, 4, [5]]);
