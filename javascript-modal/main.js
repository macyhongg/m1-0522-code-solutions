var $modalButton = document.querySelector('.modal-button');
var $surveyScreen = document.querySelector('.survey-screen')

$modalButton.addEventListener('click', survey);

function survey(event) {
  console.log('clicked');
  $surveyScreen.className = 'showing'
}

var $noButton = document.querySelector('.close-button');
$noButton.addEventListener('click', closeModal);

function closeModal(event) {
  $surveyScreen.className = 'survey-screen'
}
