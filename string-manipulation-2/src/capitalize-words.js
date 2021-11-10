/* exported capitalizeWords */
/* step 1 create a function thats called capitalizeWords
step 2 give that function a parameter string
step 3 lower case the string and the pass it to a variable
step 4 create a variable that holds an empty string
step 5 split the lowercase variable and store it into a new variable
step 6 create a for loop that loops over the variable thats holding the split method
step 7 slice the first position of the method at the loop
step 8 upper case the variable at i and add it to the variable that holds the empty string
step 9 add and assign the variable that holds slice method of i into the empty string
step 10 trim the string and assign the method to the empty string
step 11 return the variable that hold the empty string
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
  return str;
}
