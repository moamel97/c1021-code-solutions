/* exported ransomCase */

/* step 1 create a function thats called ransomCase and give it one parameter (string)
step 2 loop over each letter in the word
step 3 inside the for loop code block use the method to lower case
step 4 inside the for loop code use the math method to calculate odd numbers and capitalize every other number
step 5 return string.
*/

function ransomCase(string) {
  var str = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      str += string[i].toLowerCase();
    } else {
      str += string[i].toUpperCase();
    }
  }
  return str;
}
