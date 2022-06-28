var $form = document.getElementById('contact-form');
$form.addEventListener('submit', submit)

function submit(event) {
  event.preventDefault();
  var values = {};
  values.name = $form.elements.name.value;
  values.email = $form.elements.email.value;
  values.message = $form.elements.message.value;
  console.log(values);
  $form.reset();
};
