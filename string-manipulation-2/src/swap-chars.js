/* exported swapChars */
/* we first need to grab the firstindex of the string and assign to a variable then we need to grab the second index of a string and then assign it to a variable
after that we need to reassign the firstindex to the second index so that the letter at the first index is equal to the second and the second is equal to the first

step 1 create a function that holds 3 parameters
function swapChars (firstIndex, secondIndex, string) {
  step 2 create a variable that splits the string into an array
  step 3 create a variable that holds an empty string
  step 4 we need to assign the firsIndex to a variable
  let firstIndexChar = array[firstIndex];
  step 5 we need to assign the secondIndex to a variable
  let SecondIndexChar = array[secondIndex];
  step 6 we need to re assign the array[firstindex] to the secondIndexChar
  array[firstIndex] = secondIndexChar
  step 7 we need to re assign the array at the second index to the firstIndexChar
  array[secondIndex] = firstIndexChar
  step 8 we then assign the array to the string and turn the array back to a string
  newString = array.join('')
  step 9 we return the newString
  return newString;
}
*/

function swapChars(firstIndex, secondIndex, string) {
  const stringToArray = string.split('');
  let newString = '';
  const firstIndexChar = stringToArray[firstIndex];
  const secondIndexChar = stringToArray[secondIndex];
  stringToArray[firstIndex] = secondIndexChar;
  stringToArray[secondIndex] = firstIndexChar;
  newString = stringToArray.join('');
  return newString;
}
