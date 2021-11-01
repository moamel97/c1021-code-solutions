/* exported reverseWord */

/* first we create a function that holds an empty string then inside that function we create a for loop that checks the last character of a word and then
return the reversed string */

function reverseWord(string) {
  var reverseString = '';
  for(var i = string.length - 1 ; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
}
