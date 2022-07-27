function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name)
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name, ":", event.target.value)
}

var $name = document.querySelector("input[name='name']");
// var $name = document.forms.name
//why didn't` this method work?
var $email = document.querySelector("input[name='email']");
var $message = document.querySelector('textarea');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
