var letters = document.querySelectorAll('span');
document.addEventListener('keydown', typed)
console.log(letters);
var index = 0;

function typed(event) {
  var pressed = event.key;
  var currentKey = letters[index];
  var prevKey = letters[index-1];
  console.log(pressed)
  if (pressed === currentKey.textContent){
    currentKey.className = 'correct'
    currentKey.classList.add('underline')
    index ++;
    prevKey.classList.remove('underline')

  } else {
    currentKey.className = 'incorrect';
    prevKey.classList.remove('underline')
    currentKey.classList.add('underline')
  }
}
