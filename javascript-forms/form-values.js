var $form = document.querySelector('#contact-form');
console.log($form);

function handleForm(event) {
  event.preventDefault();
  var name = $form.elemens.name.value;
  var email =
  console.log(name);
  console.log(email);
}
$form.addEventListener('submit', handleForm);
