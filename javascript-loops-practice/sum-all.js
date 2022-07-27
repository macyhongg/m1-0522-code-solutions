/* exported sumAll */

function sumAll(numbers) {
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    var current = numbers[i];
    sum += current;
  }
  return sum;
}
