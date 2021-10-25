/* exported filterOutNulls */

// function filterOutNulls(values) {
//   var input = [];
//   for(var i = 0; i < values.length;i++)
//   input.push(values[i])
// }

function filterOutNulls(values) {
   var input = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null)
     input.push(values[i])
  }
   return input;
}
