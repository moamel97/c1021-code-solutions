/* exported isLowerCased */
/* we first need to create a funcition that has conditional that checks if the word that is passed through the parameter is lowercased or not and if it is then return a boolean;
*/

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
