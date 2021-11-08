/* exported capitalizeWord */
/* step 1 create a function called capitalizeWord and give it one parameter word
step 2 create a variable that lower case words
step 3 create a condition that checks if the lower cased word is strictly equal to javascript
step 4 return 'JavaScript'
step 5 return the word and capitalize the first letter of it.
*/

function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + lowerCase.slice(1);
}
