/* exported swapChars */
/* step 1 create a function called swapChars
step 2 give the function 3 parameters
step 3 inside the function code block create a variable the holds the first letter of the string
step 4 create a variable that holds the second letter of the string
step 5 create a variable that adds the second letter and the first letter
step 5 create a for loop that loops over the string length
step 6 add the second letter to the first letter then add it to the string length
*/

function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  var str = '';
  var firstLetter = array[firstIndex];
  var secondLetter = array[secondIndex];
  array[firstIndex] = secondLetter;
  array[secondIndex] = firstLetter;
  str = array.join('');
  return str;
}
