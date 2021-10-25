
var onAndOff = false;
var click = document.querySelector('button');
var $changeBackGroundTheme = document.querySelector('body');

function darkAndWhiteMode(event) {
  if (onAndOff === true) {
    $changeBackGroundTheme.className = 'background-off';
    click.className = 'light-bulb-style light-bulb-off';
    onAndOff = false;
  } else {
    click.className = 'light-bulb-style light-bulb-on';
    $changeBackGroundTheme.className = 'background-on';
    onAndOff = true;
  }
}

click.addEventListener('click', darkAndWhiteMode);
