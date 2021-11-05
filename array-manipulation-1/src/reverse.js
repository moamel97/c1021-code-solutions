/* exported reverse */
/* create a function with a for loop that checks every word in an array and the length then reverse the order of the array
*/

function reverse(array) {
  var arrayHolder = [];
  for(var i = array.length -1 ; i >= 0; i--) {
    arrayHolder.push(array[i]);
  }
  return arrayHolder;
}
