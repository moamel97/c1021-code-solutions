/* exported invert */
/* so we have a function that holds an object as a parameter and we need to invert the values with the keys so basically we are flipping them so that keys turn to value
to do so we need to create a new object then we need to go through the main object and reassign the value as a key and the key as a value and the retun the new object

step 1 create a function that holds an object as a parameter
function invert(source) {
  step 2 create a new variable that holds an empty object
  const newObj = {};
  step 3 create a for in loop to loop over the object
  for (const key in source) {
    step 4 we reassign key to the newObj key
    newObj[source[key]] = key
  }
  step 5 we return the  newObj
  return newObj;
}
*/

function invert(source) {
  const newObj = {};
  for (const key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
