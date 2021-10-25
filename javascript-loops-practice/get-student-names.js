/* exported getStudentNames */

function getStudentNames(students) {
  var input = [];
  for (var i = 0; i < students.length; i++) {
    input.push(students[i].name)
  }
  return input
}
