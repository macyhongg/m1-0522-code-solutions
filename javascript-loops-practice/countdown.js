/* exported countdown */

function countdown(number) {
  var array = [];
  for (let i = number; i > -1; i--) {
    array.push(i);
  }
  return array;
}
