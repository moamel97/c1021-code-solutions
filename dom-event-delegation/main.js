
var $task = document.querySelector('.task-list');
$task.addEventListener('click', taskHandler);

function taskHandler(event) {
  if (event.target.tagName === 'BUTTON') {
    var $closestTaskList = event.target.closest('.task-list-item');
    $closestTaskList.remove();
  }
  console.log($closestTaskList);
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
}
