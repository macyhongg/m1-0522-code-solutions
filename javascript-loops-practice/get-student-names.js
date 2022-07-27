/* exported getStudentNames */

function getStudentNames(students) {
  var names = [];
  for (i = 0; i < students.length; i++) {
    var studentName = students[i].name;
    names.push(studentName);
  }
  return names;
}
