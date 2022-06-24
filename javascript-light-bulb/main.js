var $lights = document.querySelector('.lightbulb-on');
var $bg = document.querySelector('.background-on');
var $bgOff = document.querySelector('background-off');
var $lightsOff = document.querySelector('.lightbulb-off')
var $lightbulb = document.querySelectorAll('div')

  function flipSwitch(event) {
    if ($lights.className == 'lightbulb-on'){
      $lights.className = 'lightbulb-off';
      $bg.className = 'background-off';
    } else if ($lights.className == 'lightbulb-off'){
      $lights.className = 'lightbulb-on';
      $bg.className = 'background-on';
    } else {
      console.log('uh oh')
    }
  }

$lights.addEventListener('click', flipSwitch);
