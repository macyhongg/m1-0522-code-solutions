/* exported swapChars */

function swapChars(firstIndex, secondIndex, string){
  var array = string.split('');
  var result = [];
  for (i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      // console.log(string[i], string[secondIndex])
      result.push(string[secondIndex]);
      // console.log(result)
    } else if (i === secondIndex) {
      // console.log(string[i], string[firstIndex])
      result.push(string[firstIndex]);
      // console.log(result)
    } else {
      result.push(string[i]);
      // console.log(result)
    }
  }
  var final = result.join('');
  return final;
}
