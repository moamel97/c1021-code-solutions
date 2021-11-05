/* exported capitalize */
/* we make a funtion that can access the first word of a string and then capitalize the output of the string.
we also should use the capitalize method for the first latter of the word */

function capitalize(word) {
  var lowerCase = word.toLowerCase();
  return word[0].toUpperCase() + lowerCase.slice(1);
}
