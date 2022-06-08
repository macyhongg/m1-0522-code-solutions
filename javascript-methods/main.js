// The Math Object
var a = 5
var b = 12
var c = 158
var maximumValue = Math.max(a, b, c);
console.log('MaximumValue: ' + maximumValue);

let heroes = ['Batman', 'Spiderman', 'Ironman', 'Wonder Woman'];
var randomNumber = Math.random();
var randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ' + randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ' + randomHero);

//Array Methods
var library = [
  {
    title: 'Oliver Twist',
    author: 'Charles Dickens'
  },
  {
    title: 'Crying in H-Mart',
    author: 'Michelle Zauner'
  },
  {
    title: 'Anxious People',
    author: 'Fredrik Backman'
  }
];

var lastBook = library.pop();
console.log('lastBook: ' + lastBook);

var firstBook = library.shift();
console.log('firstBook: ' + firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library', library);

//String Methods
var fullName = 'Macy Hong';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName)
