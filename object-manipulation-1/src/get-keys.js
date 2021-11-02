/* exported getKeys */
/* create a function give it that function a name and give it a peramter then inside the fucntion code block
return the object keys property but without using object.keys and it should be returned as an array */

function getKeys(object) {
  var objectHolder = []
  for (var keys in object)
  objectHolder.push(keys)
  return objectHolder
}
