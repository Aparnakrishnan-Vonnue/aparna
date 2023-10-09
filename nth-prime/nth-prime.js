//Attempt 1

// function findNthPrime(position) {
//   let listOfPrimeNumbers = [];
//   for (let i = 2; i < position; i++) {
//     for (let j = 2; j < i / 2; j++) {
//       if (i % j === 0) {
//         break;
//       }
//       if (listOfPrimeNumbers[j] !== i) {
//         listOfPrimeNumbers.push(i);
//         break;
//       }
//     }
//     // listOfPrimeNumbers.push(i)
//   }
//   console.log(listOfPrimeNumbers);
//   return listOfPrimeNumbers[position - 1];
// }

// console.log(findNthPrime(100));

//Attempt 2
// function findNthPrime(position){

// }

// console.log(findNthPrime(5))

// function getPrimeNumbers(){
//     let listOfPrime = []
//     let isPrime = false
//     for(let i = 0; i < position; i++){
//         let j = 2
//         while(j < i/2){
//             if(i !== 0 && i !== 1 && i % j === 0){
//                 isPrime = false
//             }
//             isPrime = true
//             j++
//         }

//         if(isPrime){
//             listOfPrime.push(i)
//         }
//     }
//     return listOfPrime
// }

// console.log(getPrimeNumbers())

//Attempt 3
function findNthPrime(n) {
  let inputNum = 2;
  while (n > 0) {
    if (isPrime(inputNum)) {
      n--;
    }
    inputNum++;
  }

  return inputNum - 1;
}
function isPrime(number) {
  let i = 2;
  while (i <= Math.sqrt(number)) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}

const testCases = [
  { n: 5, output: 11 },
  { n: 11001, output: 116461 },
  { n: 500, output: 3571 },
  { n: 10000, output: 104729 },
  { n: 50000, output: 611953 },
  { n: 100000, output: 1299709 },
];

function testNthPrime(tCases) {
  tCases.forEach((tCase, idx) => {
    if (tCase.output === findNthPrime(tCase.n)) {
      console.log(`TestCase for ${idx} passed. The output is ${tCase.output}`);
    } else {
      console.log(
        `TestCase for ${idx} failed. The expected result was ${
          tCase.output
        }, but got ${findNthPrime(tCase.n)}`
      );
    }
  });
}

testNthPrime(testCases);

// function findNthPrime(n) {
//   let listOfPrimeNumbers = [];
//   let inputNum = 2;
//   while (listOfPrimeNumbers.length < n) {
//     if (isPrime(inputNum)) {
//       listOfPrimeNumbers.push(inputNum);
//     }
//     inputNum++;
//   }

//   return listOfPrimeNumbers[n - 1];
// }

