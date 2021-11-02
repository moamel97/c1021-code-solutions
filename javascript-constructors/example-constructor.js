function ExampleConstructor() {
}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var callBackNew = new ExampleConstructor();
console.log(callBackNew);

var instanceOf = callBackNew instanceof ExampleConstructor;
console.log(instanceOf);
