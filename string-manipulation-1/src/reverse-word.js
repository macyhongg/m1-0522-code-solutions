/* exported reverseWord */

// define a function named revserWord with a single parameter of word - completed
// create an empty array to hold the letters of the word in reverse - completed
// iterate backwards, through each letter of the word - completed
// push the letter to the new array - completed
// join the reversed letters from the array together so that it is a string, not an array - completed

function reverseWord(word) {
  var reversedArr = [];
  for (i = word.length - 1; i > -1; i--) {
    reversedArr.push(word[i]);
  }
  return reversedArr.join('');
}
