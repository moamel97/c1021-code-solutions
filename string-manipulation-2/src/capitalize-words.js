/* exported capitalizeWords */
/* step 1 create a function thats called capitalizeWords
step 2 give that function a parameter string
step 3 create a variable that holds an empty string
step 4 create a for loop that loops over the string length
step 5 capitalize the first letter at the first index
step 6 push the string into the array
step 7 return the array
*/

function capitalizeWords(string) {
  var lowerCase = string.toLowerCase();
  var str = '';
  var splitMethod = lowerCase.split(' ');
  for (var i = 0; i < splitMethod.length; i++) {
    var restOfTheWord = splitMethod[i].slice(1);
    str += splitMethod[i][0].toUpperCase();
    str += restOfTheWord + ' ';
  }
  str = str.trim();
  console.log(str);
  return str;
}
