/* exported numVowels */
/* step 1 create a function thats called numVowels
step 2 give it a string as its parameter
step 3 create a for loop that loops over the string length
step 4 return the string length */

function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if ((string[i] === 'a') || (string[i] === 'e') || (string[i] === 'u') || (string[i] === 'i') || (string[i] === 'o') || (string[i] === 'A') || (string[i] === 'E') || (string[i] === 'U') || (string[i] === 'I') || (string[i] === 'O')) {
      count++;
    }
  }
  return count;
}
