/* exported tail */
/* first create a function that fucntion should loop through an array of words then pick the middle portion of that array */

function tail(array) {
  var arrayOf = [];

  for(var i = 1; i < array.length; i++) {
      arrayOf.push(array[i])
  }
  return arrayOf;
 }
