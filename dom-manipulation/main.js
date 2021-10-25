var number = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function addingClicks(event) {
  number++;
  $clickCount.textContent = 'click:' + number;
  if (number < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (number < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (number < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (number < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (number < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }

}
$hotButton.addEventListener('click', addingClicks);
