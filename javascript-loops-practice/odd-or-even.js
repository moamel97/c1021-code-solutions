/* exported oddOrEven */

function oddOrEven(numbers) {
  var input = [];
  for (var i = 0; i < numbers.length; i++)
  if (numbers[i] % 2 === 0) {
    input.push(numbers[i] = 'even')
  } else {
    input.push(numbers[i] = 'odd')
  }
  return input
}
