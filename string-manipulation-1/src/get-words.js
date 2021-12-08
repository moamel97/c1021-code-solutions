/* exported getWords */
/* we create a fucntion that holds a string as a paramter then we need to change that string to an array and store it into a new variable then return that variable.
the we need to create a conditional that checks if the string is an empty string then return an empty array.
*/

function getWords(string) {
  const stringToArray = string.split(' ');
  if (string === '') {
    return [];
  }
  return stringToArray;
}
