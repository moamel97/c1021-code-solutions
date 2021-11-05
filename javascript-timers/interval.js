var countdown = 4;
var timerId = null;
var $h1 = document.querySelector('h1');

function timer(event) {
  countdown--;
  if (countdown > 0) {
    $h1.textContent = countdown;
  } else {
    $h1.textContent = '~Earth Beeeelooooowwww Us~';
    clearInterval(timerId);
  }
}
timerId = setInterval(timer, 900);
