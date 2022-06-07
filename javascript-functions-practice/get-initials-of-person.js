/* exported getInitialsOfPerson */

function getInitialsOfPerson(person){
  let firstInitial = person.firstName[0];
  let lastInitial = person.lastName[0];
  let initials = firstInitial + lastInitial;
  return initials;
}
