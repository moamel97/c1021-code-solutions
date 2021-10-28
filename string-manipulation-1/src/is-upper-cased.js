/* exported isUpperCased */
/* create a function that checks if all the letters are capitlized if they are then return true if they are not then return false */

function isUpperCased(word) {
  var upperCase = word.toUpperCase();
  if (word === upperCase) {
    return true;
  } else {
    return false;
  }
}
