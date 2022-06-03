var student = {
firstName: 'Macy',
lastName: 'Hong',
age: 31
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Teacher';
console.log('Lives in Irvine: ', student.livesInIrvine);
console.log('Previous Occupation: ', student.previousOccupation);

// Vehicle Object

var vehicle = {
  make: 'Tesla',
  model: 'Model Y',
  year: 2021
};
vehicle.color = 'white';
vehicle.isCovertible = false;
console.log('Color: ', vehicle.color);
console.log('Is convertible? ', vehicle.isCovertible);
console.log('vehicle:' ,vehicle);

//Pet Object
var pet = {
  name: 'Captain',
  type: 'doge'
}
delete pet.name;
delete pet.type;

console.log('Pet:', pet);
