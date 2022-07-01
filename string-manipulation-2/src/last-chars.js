/* exported lastChars */

function lastChars(length, string) {
  var arr = string.split('');
  var newString = [];
  console.log(arr)
  for (let i = length - 2; i < string.length; i++) {
    console.log(arr[i])
    newString.push(arr[i]);
    // console.log(newString)
  }
  newString.join('');
  return newString;
  // console.log(newString)
}
