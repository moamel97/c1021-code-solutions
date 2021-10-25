/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var input = [];
  for (var i = 0; i < words.length; i++) {
    input.push(words[i] + suffix)
  }
  return input
}
