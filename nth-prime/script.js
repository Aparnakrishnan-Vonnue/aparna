//Attempt 1 

// function findNthPrime(position) {
//   let listOfPrimeNumbers = [];
//   for (let i = 0; i < 22002; i++) {
//     if (i === 0 || i === 1) {
//       continue;
//     }
//     for (let j = 2; j < i / 2; j++) {
//       if (i % j === 0) {
//         break;
//       }
//       if (listOfPrimeNumbers[j] !== i) {
//         listOfPrimeNumbers.push(i);
//         break;
//       }
//     }
//     if (i === 2 || i === 3) {
//       listOfPrimeNumbers.push(i);
//     }
//   }
//   console.log(listOfPrimeNumbers);
//   return listOfPrimeNumbers[position - 1];
// }

// console.log(findNthPrime(100));

//Attempt 2
// function findNthPrime(position){

// }

// console.log(findNthPrime(5))

function getPrimeNumbers(){
    let listOfPrime = []
    let isPrime = true
    for(let i = 0; i < 11002; i++){
        let j = 2
        while(j < i/2){
            if(i !== 0 && i !== 1 && i % j === 0){
                isPrime = false
            }
            j++
        }
        isPrime
        if(isPrime){
            listOfPrime.push(i)
        }
    }
    return listOfPrime
}

console.log(getPrimeNumbers())