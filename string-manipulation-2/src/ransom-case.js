/* exported ransomCase */

function ransomCase(string) {
  var newString = [];
  string = string.toLowerCase();
  for (let i = 1; i < string.length; i+=2) {
      string[i] = string[i].toUpperCase();
    }
  return string;
  }
