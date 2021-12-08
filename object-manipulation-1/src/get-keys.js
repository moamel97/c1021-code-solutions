/* exported getKeys */
/* we need to get the keys of an object an a form of an array
step 1 create a function that holds an object as a parmater
step 2 create a variable that holds an empty array
step 3 create a for in loop that loops over the object
step 4 push the object into the empty array
step 5 return the empty array
*/

function getKeys(object) {
  const newArray = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}
