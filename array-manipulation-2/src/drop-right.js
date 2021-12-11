/* exported dropRight */

/* we need to drop the last few elements and then return the rest of the array without changing the original state of the array doing so we need to create a copy of the array
so that we dont change the original array then store that copy in a variable then we need to splice the copied array from the negative position so we need to turn count into negative
and when we give negative values to splice or slice they go backwords rather then forward after that we return the newArray
    --- first way of solving ---
step 1 create a function that holds an array and count as a variable
function dropRight(array, count) {
  step 2 create a variable that holds a copy of the array
  const newArray = array.slice(0, -count);
  step 3 return the newArray
  return newArray;
  --- second way of solving---
  step 1 create a variable that holds an empty array
  const newArray = [];
  step 2 create a for loop that loops over the array.length - count so that count subtracts from the array length so if the array length is 4 and count is 2 4 - 2 is 2 thus the loop runs only twice
  for (let i =0; i < array.length - count; i++) {
    step 3 inside the for loop code block we push the array[i] into the new array
    newArray.push(array[i]);
  }
  step 4 we return the newArray
  return newArray
}
*/

function dropRight(array, count) {
  const newArray = [];
  for (let i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
