/* exported toObject */
/* we need to take an array and then turn the values inside the array into an object
step 1 create a function that holds an array as a parameter
step 2 we create variable that holds an empty object let object = {}
step 3 we assign the keyvaluePair to the Object at the keyValuePair
step 4 we return the object.
*/

function toObject(keyValuePair) {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
