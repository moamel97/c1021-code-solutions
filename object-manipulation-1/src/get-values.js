/* exported getValues */
/* we need to fined the value inside the object and then push it into a new array\
step 1 create a function that holds an object as a parameter
step 2 create a variable that holds an empty array
step 3 create a for in loop that loops over the object
step 4 push the object at keys to the empty array.
*/

function getValues(object) {
  const newArray = [];
  for (const keys in object) {
    newArray.push(object[keys]);
  }
  return newArray;
}
