/* exported isUpperCased */
/* to check if the word is uppercased we first need to create a conditional that checks if the word is uppercased or not and if it is then return true if its not then return false.
*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
