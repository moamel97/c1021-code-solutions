
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var click = document.querySelector('.click-button');
click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hoverd');
  console.log(event);
  console.log(event.target);
}

var mouse = document.querySelector('.hover-button');
mouse.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-click');
  console.log(event);
  console.log(event.target);
}

var doubleClick = document.querySelector('.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick);
