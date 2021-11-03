/* first we need to query select the h1 tag then after that we create a function that
targets the h1 tag and set a timer on it after the timer runs out we update
the text content of the h1. */

function stopTimer(event) {
  var $h1 = document.querySelector('h1');
  $h1.textContent = 'Hello There';
}
setTimeout(stopTimer, 2000);
