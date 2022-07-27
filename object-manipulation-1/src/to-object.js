/* exported toObject */

function toObject(keyValuePair) {
  var prop = keyValuePair[0];
  // console.log(prop)
  var value = keyValuePair[1];
  // console.log(value)
  var object = {
    [prop]: value
  }
  // object[prop] = value;
  return object;
}
