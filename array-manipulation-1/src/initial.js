/* exported initial */
/* first create a function that goes though every word that is inputted then we create a condition that checks for the initial words
and only return those */

function initial(array) {
  var arrayHolder = [];
  for(var i = 0; i < array.length -1; i++) {
      arrayHolder.push(array[i]);
  }
  return arrayHolder;
}
