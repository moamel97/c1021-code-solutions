/* exported drop */

/* step 1 create a function thats called drop with two parameters (array, count)
step 2 inside the function code block create a variable that holds an empty array
step 3 create a for loop thats initial condition is the value of count then loop over the length of the array at the value of count
step 4 push the value of the array to the empty array
step 5 return the new array */

function drop(array, count) {
  var arr = [];
  for (var i = count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
