/* exported student */
var student = {
  firstName: 'moamel',
  lastName: 'hashim',
  subject: 'javascript T_T',
  getFullName: function () {
    var student = this.firstName + ' ' + this.lastName;
    return student;
  },
  getIntroduction: function () {
    var intro = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
    return intro;
  }
};
