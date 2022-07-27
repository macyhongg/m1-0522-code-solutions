/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

//isUnderFive(number)
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  };
};

console.log('isUnderFive(4):', isUnderFive(4));
console.log('isUnderFive(10):', isUnderFive(10));
console.log('isUnderFive(5):', isUnderFive(5));


//isEven(number)
function isEven(number){
  let remainder = (number % 2); //why do I have to use 'let' instead of 'var' for this to work here?
  if (remainder === 0) { //why does this only work when I use strict equality?
    return true;
  } else {
    return false;
  };
};

console.log('isEven(4)', isEven(4));
console.log('isEven(10)', isEven(10));
console.log('isEven(5)', isEven(5));

//startsWithJ(string)
function startsWithJ(string){
  if (string[0] === 'j') {
    return true;
  } else {
    return false;
  };
};

console.log('startsWithJ(`JavaScript`):', startsWithJ('JavaScript'));
console.log('startsWithJ(`PHP`):', startsWithJ('PHP'));
console.log('startsWithJ(`HTML`):', startsWithJ('HTML'));

//isOldEnoughToDrink(person)
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  };
};

var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
console.log('Is Bart old enough to drink?', isOldEnoughToDrink(bart));

//isOldEnoughToDrive(person)
function isOldEnoughToDrive(person){
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  };
};

var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
console.log('Is Homer old enough to drive?', isOldEnoughToDrive(homer));

//isOldEnoughToDrinkAndDrive(person)
function isOldEnoughToDrinkAndDrive(person){
  return false;
}

console.log('Is Homer old enough to drink and drive?', isOldEnoughToDrinkAndDrive(homer));

//categorizeAcidity(pH)
function categorizeAcidity(pH){
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
};

console.log('categorizeAcidity(-1)', categorizeAcidity(-1));
console.log('categorizeAcidity(14.0001)', categorizeAcidity(14.0001));
console.log('categorizeAcidity(7)', categorizeAcidity(7));
console.log('categorizeAcidity(2)', categorizeAcidity(2));
console.log('categorizeAcidity(9)', categorizeAcidity(9));

//introduceWarnerBro(name)
function introduceWarnerBro(name){
  if (name === 'yakko' || name === 'wakko'){
    return `We're the warner brothers!`
  } else if (name === 'dot'){
    return `I'm cute~`
  } else {
    return 'Goodnight everybody!'
  }
};

console.log('introduceWarnerBro(`yakko`)', introduceWarnerBro('yakko'));
console.log('introduceWarnerBro(`wakko`)', introduceWarnerBro('wakko'));
console.log('introduceWarnerBro(`dot`)', introduceWarnerBro('dot'));
console.log('introduceWarnerBro(`macy`)', introduceWarnerBro('macy'));
