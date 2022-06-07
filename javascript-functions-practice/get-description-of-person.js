/* exported getDescriptionOfPerson */

function getDescriptionOfPerson(person){
  let description = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return description;
}
