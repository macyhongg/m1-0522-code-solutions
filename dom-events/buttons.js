function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event)
  console.log('target: .click-button')
}

//Click Event
var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick, false)

//Mouseover Event
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target: .hover-button');
}
var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover, false);

//Double-click Event
function handleDoubleClick(event){
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('target: .double-click-button')
}
var $doubleClicked = document.querySelector('.double-click-button');
$doubleClicked.addEventListener('dblclick', handleDoubleClick, false);
