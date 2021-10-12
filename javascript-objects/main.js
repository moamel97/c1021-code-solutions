var student = {
  firstName: 'moamel',
  lastName: 'hashim',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'member of the talaban committee';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'honda',
  model: 'civic',
  year: 2014
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = 'false';
console.log('value of [color]:', vehicle['color']);
console.log('value of [isConvertible]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'cookie',
  type: 'terrior mix'
};
delete pet.name;
delete pet.type;
console.log('the value of pet:', pet);
