/* exported numVowels */
/* we are provided with a string and we need to test for vowels in the string and if we fined those vowels then we need to assign them to a new empty string so that
the new string only containes the vowels letters then we need to return the new string length. vowel letters are a i o u e

step 1 create a function that holds a string as a parameter
function numVowels (string) {
  step 2 create a variable that holds an empty string
  let newString = '';
  step 3 create a for loop that loops over the string length
  for (let i = 0; i < string.length; i++) {
    step 4 create a conditional that test for vlowels
    if (/[aioueAIOUE]/.test(string[i])) {
      step 5 then add and assign the string to the newString if the condition is met.
      newString += string[i]
    }
  }
  step 5 then we return the newString length
  return newString.length;
}
*/

function numVowels(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (/[aioueAIOUE]/.test(string[i])) {
      newString += string[i];
    }
  }
  return newString.length;
}
