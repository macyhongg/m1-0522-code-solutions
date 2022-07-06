/* exported capitalizeWords */

function capitalizeWords(string) {
  string = string.toLowerCase();
  var array = string.split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
    console.log(array)
  }
  var results = array.join(" ")
  return results;
}
