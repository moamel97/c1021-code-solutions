function convertMinutesToSeconds(minutes, seconds) {
  var multiply = minutes * 60;
  return multiply;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('the value result of:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'hey, ' + name;
  return greeting;
}

var hello = greet('Beavis');
console.log(hello);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var resultGetArea = getArea(17, 42);
console.log('the value of area:', resultGetArea);

function getFirstName(person) {

  var firstName = person.firstName;
  return firstName;

}
var myFirstName = getFirstName({ firstName: 'moamel', lastName: 'hashim' });
console.log('the value of person first name:', myFirstName);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var myLastListElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('the value of the last element:', myLastListElement);
