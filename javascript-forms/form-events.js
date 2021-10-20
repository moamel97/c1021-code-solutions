var $input = document.querySelector('input');
var $textAreae = document.querySelector('textarea');

function handleFocus(event) {
  console.log('focus event was fired');
  console.log(event.target.name);
}
$input.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event was fired');
  console.log(event.target.name);
}
$input.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}
$input.addEventListener('input', handleInput);
console.log($textAreae);
