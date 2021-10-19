/* exported filterOutStrings */

function filterOutStrings(values) {
  var input = [];
  for(var i = 0; i < values.length; i++) {
    if (typeof(values[i]) !== 'string')
    input.push(values[i])

  }
  return input;
}
