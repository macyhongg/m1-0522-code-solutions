/* exported intersection */

// Iterate through first array
// if any match from the second array, push to new array

function intersection(first, second) {
  var arr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      arr.push(first[i])
    }
   }
   return arr;
}
