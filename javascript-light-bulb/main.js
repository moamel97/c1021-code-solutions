/* first we creat a button element in the html then applie designs to the button
then in the main JS make a query selector that select the element button
then attach it to a variable to store the data in
next queryselect the css class for background style and lightbulb style
creat a function that has one parameter as its argument
inside the function make a variable that fucntion should return true or false depending on the natural state of the website
if a user clicks on the light bulb the light bulb should change themes
every time someone clicks it toggles between both statements true and false
the bacground styling should change from light to dark
*/

var onAndOff = false;
var click = document.querySelector('button');
var $changeBackGroundTheme = document.querySelector('body');
// var $changeLightBulbTheme = document.querySelector('.light-bulb-off');
// var $changeLightBulbThemeOn = document.querySelector('.light-bulb-on');
// var $changeBackGroundThemeOn = document.querySelector('.background-on');
// var $lightBulbStyling = document.querySelector('.light-bulb-style');

function darkAndWhiteMode(event) {
  if (onAndOff === true) {
    $changeBackGroundTheme.className = 'background-off';
    click.className = 'light-bulb-style light-bulb-off';
    onAndOff = false;
    // $lightBulbStyling.className = 'light-bulb-style';
  } else {
    click.className = 'light-bulb-style light-bulb-on';
    $changeBackGroundTheme.className = 'background-on';
    onAndOff = true;
    // $lightBulbStyling.className = 'light-bulb-style';
  }
}

click.addEventListener('click', darkAndWhiteMode);
