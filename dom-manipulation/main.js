var counter = 0;

function increaseCounter(event) {
  counter = counter + 1;
  document.querySelector('.click-count').textContent = 'Clicks: ' + counter;

  if (counter < 4) {
    $hotButton.className = 'hot-button cold'
  } else if (counter > 3 && counter < 7) {
    $hotButton.className = 'hot-button cool'
  } else if (counter >= 7 && counter < 10) {
    $hotButton.className = 'hot-button tepid'
  } else if (counter >= 10 && counter < 13) {
    $hotButton.className = 'hot-button warm'
  } else if (counter >= 13 && counter < 16) {
    $hotButton.className = 'hot-button hot'
  } else if (counter >=16) {
    $hotButton.className = 'hot-button nuclear'
  }
}

var $hotButton = document.querySelector('.hot-button');
var $clicks = document.querySelector('.click-count');
$hotButton.addEventListener('click', increaseCounter, false);
