var colors = ['red', 'white', 'blue'];
console.log('value of color [0]:', colors[0]);
console.log('value of color [1]', colors[1]);
console.log('value of color[2]', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', ' + 'and ' + colors[2]);

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + 'and ' + colors[2]);
console.log('value of colors:', colors);

var students = ['momo', 'dre', 'adrienne', 'jon'];
var numbersOfStudents = students.length;
console.log('there are', numbersOfStudents, 'students in the class.');

var lastIndex = numbersOfStudents - 1;

var lastStudent = students[lastIndex];
console.log('The last student in the arry is', lastStudent);
console.log('value of students:', students);
