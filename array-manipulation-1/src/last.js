/* exported last */
/* we need to extract the last element from the array to do so we need to return the array at the last elemetn of the array length

step 1 create a function that holds array as a parameter
step 2 create a conditional that checks if the array is an empty array if it's then return undefined.
step 3 return the array[array.length -1].
*/

function last(array) {
  if (array === []) {
    return undefined;
  }
  return array[array.length - 1];
}
