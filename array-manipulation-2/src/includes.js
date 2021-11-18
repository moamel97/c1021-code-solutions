/* exported includes */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    } else if (value !== array[i]) {
      return false;
    } else if (value === true) {
      return false;
    }
  }
}
