/* exported truncate */
/* step 1 create a function that holds 2 parameters the first parameter is a number the second one is a string
step 2 create a variable that is an empty array[];
step 3 create a for loop that loops over the length of each word in the index
step 4 inside the for loop code block use the substring() method to substring the text that are being passed in
the string parameter then we pass the parameter "number" as an argument to the substring method so that it removes
letters depending on what number is being inputted then after that we change the text content to equal string[i] + '....'
that way it displays the dots after the text have been trimmed
step 5 we push the string at [i] into the array variable.
step 6 return array
note <bold> since the substring method acts like a for loop there is no need to use a for loop.. so make sure to delete the for loop
whenever u start working on the challenge again. thank you for coming to my ted talk.
          !important!
          console.log everything and debug
*/

function truncate(number, string) {
  return string.substring(0, number) + '...';
}
