/* exported lastChars */
function lastChars(length, string) {
  var str = '';
  if (string.length < length) {
    return string;
  }
  for (var i = string.length - length; i < string.length; i++) {
    str += string[i];
  }
  return str;
}
