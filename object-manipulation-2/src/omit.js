/* exported omit */
/* i have a function that passes an object and an array the array holds values like [foo, baz] and the object holds properties and values {foo: 1, bar: 2, baz: 3} i need to first create a newObject that
holds the new values then i need to search inside the source object and fined the strings that match in the object and the array(foo and baz) i need to check if those properties are included in the array
if they're then i need to delete those properties then assign whats left to the new object

step 1 create a function that holds two parameters
function omit(source,key) {
  step 2 create a variable that holds an empty object
  const newObj = {};
  step 3 create a for in loop to loop over the object
  for (const keys in source) {
    step 4 create a conditonal that checks if the key is not included in the keys
    if (!key.includes(keys)) {
      step 6 then we need to assign the source at keys to the object at keys so that whats not included in key is assigned to the new object
      newObj[keys] = source[keys];
    }
  }
  step 7 we return the new object
  return newObj
}
*/

function omit(source, key) {
  const newObj = {};
  for (const keys in source) {
    if (!key.includes(keys)) {
      newObj[keys] = source[keys];
    }
  }
  return newObj;
}
