/* exported lastChars */
/* we need to remove the first characters of a string up to the provided length and then assign the results to a new variable then return the new variable

step 1 create a function that holds a length and a string as a parameter
function lastChars (length, string) {
  step 2 create a variable that holds an empty string
  let newString = '';
  step 3 create a conditional that checks if the string length is less then the length provided then return the string
  if (string.length < length) {
    step 4 return string
    return string;
  }
  step 5 create a for loop that loops over the string length - the length that is provided
  for (let i = string.length -1; i > length; i++) {
    step 7 add and assign the string[i] to the empty string;
    newString += string[i];
  }
  step 8 return the newString
  return newString;
}
*/

function lastChars(length, string) {
  let newString = '';
  if (string.length < length) {
    return string;
  }
  for (let i = string.length - length; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
