/* exported pick */
/* we need to pick out or return the object that are only assigned by the key so if the key does not match the source
then we return an empty object but if it does then we need to only return the objects that matches the key

step 1 create a function that holds 2 parameters first is a source and second is a key
function pick(source, key) {
  step 2 create a new object
  const newObj = {};
  step 3 create a for in loop to loop over the object keys
  for (let keys in source) {
    step 4 create a conditional that checks if the key value includes keys and if source at keys is not equal to undefined
    if (key.includes(keys) && (source[keys] !== undefined)) {
      step 5 if the value of key is included in keys and the value of source is not undefined then we assign source at keys to the new object at keys
      newObj[keys] = source[keys];
    }
  }
  step 6 we return the newObj
  return newObj;
}
*/

function pick(source, key) {
  const newObj = {};
  for (const keys in source) {
    if (key.includes(keys) && (source[keys] !== undefined)) {
      newObj[keys] = source[keys];
    }
  }
  return newObj;
}
