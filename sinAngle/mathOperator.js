//Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.

function mathOperator(arr) {
  let sum = 0;
  let diff = 0;
  let product = 0;
  let quotient = 0;
  let power = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + arr[i + 1];
    diff = sum - arr[i + 2];
    product = diff * arr[i + 3];
    quotient = product / arr[i + 4];
    power = quotient ** arr[i + 5];
    return power
  }
}

console.log(mathOperator([1, 2, 1, 4, 4, 3]));
console.log(mathOperator([1, 5, 3, 8, 6, 2]));

