var $form = document.querySelector('#contact-form');
console.log($form);

function handleForm(event) {
  event.preventDefault();
  var messagedate = {
     name : $form.elements.name.value,
     email : $form.elements.email.value,
     textarea: $form.elements.message.value
  };
  console.log(messagedate);
  $form.reset();
}

$form.addEventListener('submit', handleForm);
