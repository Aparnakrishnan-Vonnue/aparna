const fibonacciSequence = [0, 1];
const num1 = fibonacciSequence[0];
const num2 = fibonacciSequence[1];
let counter = 2;

function returnFibonacciSequence(num1, num2) {
  if (counter === 10) {
    return;
  }
  fibonacciSequence.push(num1 + num2);
  counter++;
  returnFibonacciSequence(num2, num1 + num2);
  return fibonacciSequence;
}

console.log(returnFibonacciSequence(num1, num2));



