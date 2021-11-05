/* exported toObject */
/* first we create a function that function holds one parameter inside the fucntion code block we need to take a
string array and then turn that it to an object */

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1]
  return object;
}
