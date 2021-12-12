/* exported capitalizeWord */
/* we need to first make sure that the string is lowercased first then we need to check if the lowercased word is javascript and if its then we need to return the string JavaScrip
after that we need to capitalize the first letter of the word and add the rest of the word to it

step 1 create a function that holds a word as a parameter
function capitializeWords(word){
  step 2 create a variable that lowercases the word
  let lowerCasedWord = word.toLowerCase();
  step 3 we need to make an if statement that checks if the lowerCasedWord is equal to javascript and if it is then return 'JavaScript'
  if (lowerCasedWord === 'javascript') {
    return 'JavaScript';
  }
  step 4 create a variable that uppercases the first letter of a word
  let firstLetterUpperCased = lowerCasedWord[0].toUpperCase();
  step 5 create a variable that holds the rest of the word
  let theRestOfTheWord = lowerCasedWord.slice(1);
  step 6 we return the first letter of the word plus the rest of the word
  return firstLetterUpperCased + theRestOfTheWord;
}
*/

function capitalizeWord(word) {
  const lowerCasedWord = word.toLowerCase();
  if (lowerCasedWord === 'javascript') {
    return 'JavaScript';
  }
  const firstLetterUpperCased = lowerCasedWord[0].toUpperCase();
  const theRestOfTheWord = lowerCasedWord.slice(1);
  return firstLetterUpperCased + theRestOfTheWord;
}
