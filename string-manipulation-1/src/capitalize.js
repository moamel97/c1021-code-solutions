/* exported capitalize */
/* to capitalize a word we first need to find a way to lower case the word first so that the string is all lowercased then
we need to capitalize the first letter of the word
step 1 - create a fucntion that take a word as a parameter
step 2 - create a variable that lowercases the string.
step 3 - create a another variable that uppercase the first letter of the variable that is holding the lowercased string
step 4 - return the variable that is holding the uppercased first letter
*/

function capitalize(word) {
  const lowerCased = word.toLowerCase();
  return word[0].toUpperCase() + lowerCased.slice(1);
}
