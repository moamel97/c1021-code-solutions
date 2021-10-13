var maximumValue = Math.max(5, 10, 8, 9);
console.log('the value of maximum value:', maximumValue);

var heroes = ['Spiderman', 'Ironman', 'Black Panther', 'Thor'];
var randomNumber = Math.random(0);
randomNumber = randomNumber * heroes.length;
console.log('The value of random number:', randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('The value of random index:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('The value of random hero:', randomHero);

var library = [
  {
    author: 'moamel',
    title: 'cooking with a spoon'
  },
  {
    author: 'moamel',
    title: 'The life of me'
  },
  {
    author: 'moamel',
    title: 'cody confuse me sometimes'
  }
];

var lastbook = library.pop();
console.log('The value of last book:', lastbook);

var firstBook = library.shift();
console.log('The value of first book:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr.Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice('', 1);
console.log('The value of library:', library);

var fullName = ['moamel ', 'hashim'];
var firstAndLast = fullName.splice(' ');
console.log(firstAndLast);
var firstName = firstAndLast[0];
var sayMyName = firstName.toUpperCase();
console.log('The value of say my name:', sayMyName);
