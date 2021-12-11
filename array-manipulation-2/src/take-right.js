/* exported takeRight */
/* we need to create a shallow array that containes the elements of the array backwords so if we input [1,2,3,4] and the count that is provided is 1
then the new array should return 4 only
    --- first way of solving ---
step 1 create a function that holds an array and count as a parameter
function takeRight(array, count) {
  step 2 create a variable that holds a shallow copy of the array up to the value of count but backwords
  const newArray = array.slice(-count);
  step 3 return the newArray
  return newArray
}
  --- second way of solving ---
  step 1 create a function that holds an array and count as a parameter
  function takeRight(array, count) {
    step 2 create a variable that holds an empty array
    const newArray = [];
    step 3 create a for loop that loops backwords and stops at the length of count
    for (let i = array.length - count; i < array.length; i++) {
      step 4 push the array[i] into the newArray
      newArray.push(array[i])
    }
    step 5 return the newArray
    return newArray;
  }
*/

function takeRight(array, count) {
  if (count > array.length) {
    return [];
  }
  const newArray = [];
  for (let i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
