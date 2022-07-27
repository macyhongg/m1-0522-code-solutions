/* exported ransomCase */

function ransomCase(string) {
  var ransom = [];
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom.push(string[i]);
    } else {
      var x = string[i].toUpperCase();
      ransom.push(x);
    }
  }
  var result = ransom.join('');
  return result;
}
