/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('')
  var placeholer = firstIndex;
  let array[firstIndex] = array[secondIndex];
  let array[secondIndex] = array[placeholer];
  // string.replace(firstIndex, secondIndex);
  // string.replace(secondIndex, placeholder)
}
