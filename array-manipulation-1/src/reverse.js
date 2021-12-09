/* exported reverse */
/* we need to take an array and reverse it.
step 1 create a function that takes an array
step 2 create a new variable to store the new array in let newArray = [];
step 3 create a for loop that loops over the length of the array backwrods.
for (let i = array.length -1; i>=0;i--) {
  step 4 we push the array at i into the newArray.
  newArray.push(array[i]);
}
step 5 we return the newArray

*/

function reverse(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
