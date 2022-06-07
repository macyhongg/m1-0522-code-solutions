// Convert Minutes to Seconds
function convertMinutesToSeconds(minutes) {
  let seconds = minutes * 60;
  return seconds;
};

var result = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds Result: ' + result);

// greet(name)
function greet(name) {
  console.log('Hey, ' + name)
};

greet('Beavis');

//getArea (width, height)
function getArea(width, height) {
  let area = width * height;
  return area;
};

var getAreaResult = getArea(17, 42);
console.log('getArea Result: ' + getAreaResult)

//getFirstName(person)
function getFirstName(person) {
  return person.firstName;
};

var firstNameResults = getFirstName({firstName: 'Lelouche', lastName: 'Lamperouge'});
console.log('First Name: ' + firstNameResults)


//getLastElement(array)
function getLastElement(array) {
  var lastArray = array.length-1;
  var lastElement = array[lastArray];
  return lastElement;
}

var lastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement Results: ' + lastElementResults)
