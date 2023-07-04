
function isPrime(number) {
  //identify if the number is a float
  if (number === 1) {
    return `${number} is neither prime nor composite`;
  }

  if(number < 1)return false

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

console.log(isPrime(2));
