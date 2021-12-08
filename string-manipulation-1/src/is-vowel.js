/* exported isVowel */
/* we need to create a function that checks if the characters that are passed through it are vowels or not
to do so we need to create a conditional that checkas if the character is a vowl or not both in uppercase and lowercase
*/

function isVowel(char) {
  return /[aeiouAEIOU]/.test(char);
}
