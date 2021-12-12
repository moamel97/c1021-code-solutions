/* exported truncate */
/* theres 2 ways of doing this problem the first way is by subString the string and returning the subStringed version of the string + ...
or by splicing the string.
step 1 create a function that hold a length and a string as a parameter
step 2 return the substring string +...
*/

function truncate(length, string) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    newString += string[i];
    if (i >= string.length) {
      return string + '...';
    }
  }
  return newString + '...';
}
