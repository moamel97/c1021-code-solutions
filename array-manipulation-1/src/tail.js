/* exported tail */
/* we neeed to return the array without the first element in the array and to do that we need to initalize the loop at the second index rather then the first one then store the elements inside the for loop into a new variable then return that variable.

step 1 create a function that holds an array as a parameter
step 2 create a variable that holds an empty array
step 3 create a for loop that initializes at the second index
step 4 push the array at i into the the empty array
step 5 return the new array
*/

function tail(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
