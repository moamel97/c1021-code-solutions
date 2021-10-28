/* exported isLowerCased */
/* create a function that checks if the first latter of the sentance is lower cased and if its then return true and if its not then return false*/


function isLowerCased(word) {
  var lowerCase = word.toLowerCase();
  if (word === lowerCase) {
    return true;
  } else {
    return false;
  }
}
