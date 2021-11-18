/* exported take */
/* step 1 create a function called take with two parameters
step 2 inside the function code block create a variable that holds an empty array
step 3 create a for loop that loops over the array length
step 4 inside the for loop code block push array [i] to the new variable with an empty array
step 5 slice the empty array and assign it to the new variable
step 6 create a condition that check if the new variable that holds the value of the sliced array is undefined and if it
then return an empty array
step 7 return the value of the sliced array */

function take(array, count) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i]);
    var sliceArray = arr.slice(0, count);
  }
  if (sliceArray === undefined) {
    return [];
  }
  return sliceArray;
}
