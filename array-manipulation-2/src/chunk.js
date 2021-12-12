/* exported chunk */
/* we need to create a function that stores an array then the values inside that array are we need to resize the values so that the return value is an array that containes another array
step 1 create a variable that holds an empty array
let newArray = [];
step 2 we create another varibale that contains another empty array
let insideArray = [];
step 3 we create a for loop that loops over the array length
for (let i = 0; i < array.length; i++) {
  step 4 inside the for loop code block we push the the array [i] into the inside array
  insideArray.push(array[i]);
  step 5 we create a conditional that checks if the inside array length is equal to size or if i is equal to the last index of the array
  if (insideArray.length === size || i === array.length -1) {
    step 6 we push the inside array into the newArray
    newArray.push(insideArray);
    step 7 change the inside array back into an empty array
    insideArray = [];
  }
  step 8 we return the newArray
  return newArray
}
*/

function chunk(array, size) {
  const newArray = [];
  let insideArray = [];
  for (let i = 0; i < array.length; i++) {
    insideArray.push(array[i]);
    if (insideArray.length === size || i === array.length - 1) {
      newArray.push(insideArray);
      insideArray = [];
    }
  }
  return newArray;
}
