/* exported getValues */

function getValues(object) {
  var values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
