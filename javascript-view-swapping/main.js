var $container = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
$container.addEventListener('click', switchTabs);

function switchTabs(event) {
  if (event.target.matches('.tab') === false) {
    return;
  }
  for (var tabIndex = 0; tabIndex < $tab.length; tabIndex++) {
    if ($tab[tabIndex] === event.target) {
      $tab[tabIndex].className = 'tab active';
    } else {
      $tab[tabIndex].className = 'tab';
    }
  }
  var viewName = event.target.getAttribute('data-view');

  for (var viewIndex = 0; viewIndex < $view.length; viewIndex++) {
    if ($view[viewIndex].getAttribute('data-view') !== viewName) {
      $view[viewIndex].className = 'view hidden';
    } else {
      $view[viewIndex].className = 'view';
    }
  }
}
