/* exported zip */

// Declare a function named zip with two parameters, first and second (arrays)
// Determine which is has the shorter length and use that for comparison
// Iterate through the shorter array
// Push @ index from each array into a new array


function zip(first, second) {
  var result = [];
  if (first.length > second.length) {
    first.length = second.length
  } else {
    second.length = first.length
  };
  for (let i = 0; i < first.length; i++) {
    var temp = [];
    temp.push(first[i]);
    temp.push(second[i]);
    result.push(temp);
  }
  console.log(result);
  return result;
};

// zip(['name', 'course', 'grade'], ['Cody', 'CSS', 9001]);
// // -> [["name", "Cody"], ["course", "CSS"], ["grade", 9001]]
