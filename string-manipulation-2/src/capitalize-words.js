/* exported capitalizeWords */
/* we have a string and we need to first lower case the string so that the string we are giving is equal to each other then we need to split the string so that we turn it to an array
then we need to loop over the array and inside the for loop code block we need to slice the rest of the string and store it into a variable
after that capitalize the first letter of the word then we add and assign it into the empty string. after that we add and assign the rest of string to the empty string with spaces
then we trim the new string. lastly we return the string.

step 1 create a function that holds a string as a parameter
function capitalizeWords (string) {
  step 2 create a variable that holds an empty string
  let newstring = '';
  step 3 create a variable that holds the string lowercased
  let lowerCased = string.toLowerCase
  step 4 create a variable that splits the string and turn it to an array
  let stringToArray = lowerCased.split(' ');
  step 5 we need to loop over the array length
  for (let i =0; i < stringToArray.length; i++) {
    step 6 we need to slice the rest of the word form the array
    let restOfTheWord = stringToArray[i].slice(1);
    step 7 we add and assign the capitalized letter to the newString
    newString += stringToArray[i][0].toUpperCase();
    step 8 then we add the rest of the word plus space
    newString += restOfTheWord + ' ';
  }
  step 9 we then trim the newString
  newString = newString.trim();
  step 10 we return the newString
  return newString;
}
*/

function capitalizeWords(string) {
  let newString = '';
  const lowerCased = string.toLowerCase();
  const stringToArray = lowerCased.split(' ');
  for (let i = 0; i < stringToArray.length; i++) {
    const restOfTheWord = stringToArray[i].slice(1);
    newString += stringToArray[i][0].toUpperCase();
    newString += restOfTheWord + ' ';
  }
  newString = newString.trim();
  return newString;
}
