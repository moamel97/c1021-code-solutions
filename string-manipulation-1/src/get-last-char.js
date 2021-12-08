/* exported getLastChar */
/* we need to fined the last character of a word and to that we first have to go over the string length and then save it into a new variabel
step 1- create a function that holds one parameter (string).
step 2 - create a variable that holds an empty string.
step 3 - create a for loop that loops over the string.length
step 4 - inside the for loop code block assign the string[i] to the variable that is holding an empty string.
*/

function getLastChar(string) {
  let lastCharacter = '';
  for (let i = 0; i < string.length; i++) {
    lastCharacter = string[i];
  }
  return lastCharacter;
}
