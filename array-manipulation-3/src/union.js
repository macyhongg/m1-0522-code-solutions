/* exported union */

// if the value is already in result, do not push it again

function union(first, second) {
  var result = [];
  for (let i = 0; i < first.length; i++) {
    result.push(first[i])
  }
  for (let x = 0; x < second.length; x++) {
    if (!(result.includes(second[x]))) {
      result.push(second[x]);
    }
  }
  return result;
}
