/* exported getWords */
/* create a function that creates an array and seprate each word as well as check if the string has a word inside it and if it left empty then return an empty erray
if not the return the sentance split up */

function getWords(string) {
  if (string === '') {
    var array = [];
    return array;
  }
 var splits = string.split(' ');
return splits;
}
