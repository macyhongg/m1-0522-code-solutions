document.querySelector('.task-list').addEventListener('click', function(e) {
  console.log('event.target:', e.target);
  console.log('event.target.tagName:', e.target.tagName);

  var $button = document.querySelector('button');
  if (e.target.tagName === "BUTTON") {
    // var closest = element.closest(".task-list-item");
    var ancestor = $button.closest('.task-list-item');
    console.log('closest .task-list-item', ancestor);
    ancestor.remove();
  }
})
