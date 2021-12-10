/* exported ransomCase */
/* we have a string with random letters uppercased or lowercased loop over the string and then uppercase every odd number
after that we return the string

step 1 create a function that holds a string as a parameter
step 2 create a variable that holds an empty string
step 3 create a for loop that loops over the string length
step 4 create a conditional inside the for loop code block that checks for an even index in the string
step 5 inside the if conditional lowerCase the even index of the string then add and assign it to the empty string
step 6 else add and assign the string uppercased to the empty string
step 7 return the new string
*/

function ransomCase(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
