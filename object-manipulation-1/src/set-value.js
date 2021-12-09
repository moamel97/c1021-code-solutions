/* exported setValue */
/* we need to add new property and a new value to the object
step 1 create a function that holds and object , key and a value as a parameter
step 2 return the object at key and assign it the value.
*/

function setValue(object, key, value) {
  const valueOfObject = object[key] = value;
  return valueOfObject;
}
