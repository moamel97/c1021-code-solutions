/* exported getValues */
/* create a function holds an object as its parameter and then reurn the value of that object in a form of an array without using
object.value the other method of retreaving the values of an object is by using a for in loop to loop through an object and retreaving its value.*/

function getValues(object) {
  var objectHolder = [];
  for (var i in object) {
    objectHolder.push(object[i])
  }
  return objectHolder
}
