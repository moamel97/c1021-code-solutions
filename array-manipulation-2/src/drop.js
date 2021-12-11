/* exported drop */
/* first we need to create a copy of the array so that we dont change the original array state then we need to create a shallow copy of array with the new values stored inside it

step 1 create a function that holds an array and count as a parameter
function drop (array, count) {
  step 2 create a variable that holds the newArray. the newArray needs to hold values everything after what the count value is so
  if we have an array that holds [1,2,3,4,5] and the value of count is 2 the the new array should be [3,4,5]
  const newArray = array.slice(count)
  return newArray
}
*/

function drop(array, count) {
  const newArray = array.slice(count);
  return newArray;
}
