/* exported compact */
/* we need to check if the array containes any falsy statments and if it does then we need to remove them from the array and return a new array that containes elements without the falsy values
step 1 create a function that holds an array as a parameter
step 3 create a variable that holds an empty array let newArray = [];
step 4 create a for loop that loops over the array length.
for (let i = 0; i < array.length; i++) {
  step 5 push the values inside the array at i into the newArray
  newArray.push(array[i])
  step 6 return the newArray;
}

step 7 return the newArray;
*/

function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if ((array[i] !== false) && (array[i] !== undefined) && (array[i] !== null) && (array[i]) && (array[i] !== 0) && (array[i] !== '')) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
