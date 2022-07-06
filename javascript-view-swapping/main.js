var $tabCont = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabCont.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {

    for (let i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
      }
      else {
        $tab[i].className = 'tab';
      }
    }

    var $dataView = event.target.getAttribute('data-view');
        // or: var $dataView = event.target.dataset.view;

    for (let i = 0; i < $views.length; i++) {
      if ($views[i].dataset.view === $dataView) {
        $views[i].className = 'view'
      } else {
        $views[i].className = 'view hidden'
      }
    }

  }
} )
