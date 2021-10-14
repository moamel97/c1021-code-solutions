/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return string;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return 'not old enough to drink';
  } else {
    return 'old enough to drink';
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return 'not old enough to drive';
  } else {
    return 'old enough to drive';
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH <= 7) {
    return 'acid';
  } else if (pH >= 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if ((name === 'yako') || (name === 'wakko')) {
    return "We're the warner brothers !";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
