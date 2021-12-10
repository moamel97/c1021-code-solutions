/* exported firstChars */
/* we need to return the string trimed so that it displays only up to the length that is provided to do so we need to have an empty string to hold a new updated string then
we need to create a for loop that loops over the length that is provided then we add to the empty string after that we create a conditional that checks if the length is less then i then we
return the string

step 1 create a function that holds a length and a string as a parameter
function (length, string) {
  step 2 create a variable that holds an empty string
  let newString = '';
  step 3 create a for loop that loops over the string up to the length that is provided
  for (let i = 0; i < length; i++) {
    step 4 we create a conditional that checks if the string length that is provided is less then or equal to the value of i then we return the string
    if (string.length <= i) {
      return string
    }
    step 5 if the code makes it pass the conditional that means the value of length is grater then i which then excute this code and adds the string [i] to the newString
    newString += string[i];
  }
  step 6 we return the newString
  return newString;
}
*/

function firstChars(length, string) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    if (string.length <= i) {
      return string;
    }
    newString += string[i];
  }
  return newString;
}
