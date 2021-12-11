/* exported take */
/* we need to create a copy of the array so that we dont change the original array then we need to return the array up to the provided number in count

step 1 create a function that holds an array and a count as a parameter
function take (array, count) {
  step 2 create a variable that holds a shallow copy of the array that starts at the zero index of the array and stops at the count provided
  let newArray = array.slice(0,count);
  step 3 return the newArray;
  return newArray;
}
*/

function take(array, count) {
  const newArray = array.slice(0, count);
  return newArray;
}
