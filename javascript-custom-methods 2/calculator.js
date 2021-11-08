/* exported calculator */
var calculator = {
  add: function (x, y) {
    var sum = x + y;
    return sum;
  },
  subtract: function (x, y) {
    var sub = x - y;
    return sub;
  },
  multiply: function (x, y) {
    var multi = x * y;
    return multi;
  },
  divide: function (x, y) {
    var divid = x / y;
    return divid;
  },
  square: function (x) {
    var squr = x * x;
    return squr;
  },
  sumAll: function (numbers) {
    var addAllNumbers = 0;
    for (var i = 0; i < numbers.length; i++) {
      addAllNumbers += numbers[i];
    }
    return addAllNumbers;
  },
  getAverage: function (numbers) {
    var addAllNumbers = 0;
    for (var i = 0; i < numbers.length; i++) {
      addAllNumbers += numbers[i];
    }
    return addAllNumbers / numbers.length;
  }
};
