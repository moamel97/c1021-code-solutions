/* exported includes */

/* we are provided with an array and a value and we need to check if the value that is provided is inside the array and if it is then we need to return true or false without using the includes method

step 1 create a function that takes in two parameters array and value
function takeRight(array, value) {
  step 2 create a for loop that loops over the array
  for (let i = 0; i < array.length; i++) {
    step 3 create a conditional that checks if the value is equal to the array[i]
    if (array[i] === value) {
      step 4 we return true if a match is found
      return true
    }
      step 5 the we return false if a match was not found
    return false
  }
}
*/

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
