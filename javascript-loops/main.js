/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  var i = 1;
  while (i <= 10) {
    i++;
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
 var evenNumbers = [];
 var currentNumber = 2;
 var i = 2;
 while (i <= 20) {
   i += 2;
   evenNumbers.push(currentNumber);
   currentNumber += 2;
 }
return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
