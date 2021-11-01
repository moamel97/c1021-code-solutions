/* exported compact */
/* create a function that loops over every word in the array then if it finds a null, nan or undifined it filters them from the array */

function compact(array) {
  var arrayHolder = [];
  for (var removeFalse of array)
  removeFalse && arrayHolder.push(removeFalse);
  return arrayHolder;
}
