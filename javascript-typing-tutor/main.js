var onAndOff = false


var $h1 = document.querySelector('h1');
var $span = document.querySelectorAll('span');
// var $colorRed = document.querySelector('.color-red');
// var $colorGreen = document.querySelector('.color-green');
console.log($h1);
console.log($span);
// console.log($colorRed);
// console.log($colorGreen);
function listener(event) {
  // for (var i = 0; i < $span.length; i++)
  if (onAndOff === false)
  $h1.className = 'color-green';
  $h1.textContent = '';
}

$h1.addEventListener('keydown', listener);
$h1.addEventListener('keyup', listener);
