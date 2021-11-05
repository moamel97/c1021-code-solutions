/* exported compact */
/* create a function that loops over every word in the array then if it finds a null, nan or undifined it filters them from the array */

function compact(array) {
  var arrayHolder = [];
 for (var i = 0; i < array.length; i++) {
   if ((array[i] !== false) && (array[i] !== null) && (array[i] !== undefined) && (array[i]) && (array[i] !== 0) && (array[i] !== -0) && (array[i] !== ''))
     arrayHolder.push(array[i])
 }
  return arrayHolder;
};
