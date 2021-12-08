/* exported initial */
/* we first need to take that array we are giving and remove the last element from it then return that array
step 1 create a function that holds an array as a parameter
step 2 create a variable that holds an empty array let newArray = [];
step 3 create a for loop that initializes at the first index and loops over the array length -1 so that it stops before the last element thus leaving the last element out of the loop
step 4 push the array at i into the newArray variable so that it holds a new array
step 5 return the newArray;
*/

function initial(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
