/* exported reverseWord */
/* we need to create a function that takes in a word as a parameter then reverse that word.
to reverse a word theres two ways of doing it first is by using the reverse method which it automatically switches the word and prints out the new reversed word for us
or by creating a new string that containes the reversed word.

stpe 1 create a function that takes a word as a parameter
stpe 2 create a variable with an empty string.
step 3 create a for loop that loops over the string backwords
step 4 add and assign the string[i] to the new variable that holds an empty string
step 5 return the new string
*/

function reverseWord(word) {
  let string = '';
  for (let i = word.length - 1; i >= 0; i--) {
    string += word[i];
  }
  return string;
}
