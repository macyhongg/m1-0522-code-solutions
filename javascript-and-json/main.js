var array = [
  {
    isbn: '9780062498540',
    title: 'The Hate U Give',
    author: 'Angie Thomas',
  },
  {
    isbn: '9780439358071',
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'JK Rowling',
  },
  {
    isbn: '9798745274824',
    title: 'The Great Gatsby' ,
    author: 'F Scott Fitzgerald',
  }
];

console.log('Array of books:', array);
console.log('typeof:', typeof array)

var stringified = JSON.stringify(array);
console.log('JSON String:', stringified);
console.log('typeof:', typeof stringified)

var studentdata = '[{ "Number id": "123456789", "String name": "Name"}]'
console.log('Student String:', studentdata);
console.log('typeof:', typeof studentdata);

var parsed = JSON.parse(studentdata);
console.log('Parsed student string:', parsed);
console.log('typeof:', typeof parsed)
