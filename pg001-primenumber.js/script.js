let numberToCheck = 29;
function checkWhetherPrime(number) {
  if (number === 1) {
    return `${number} is neither prime nor composite`;
  }
  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      console.log(`${number} is not a prime number`)
      return false;
    }
    i++;
  }
  console.log(`${number} is a prime number`)
  return true;

}

console.log(checkWhetherPrime(numberToCheck));
