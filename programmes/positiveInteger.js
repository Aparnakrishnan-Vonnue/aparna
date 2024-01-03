//function that finds the smallest positive integer divisible by all numbers from 1 to N 
function findGcd(num1, num2) {
    let temp = 0;
    let diff = 0;
  
    if (num1 < 0 || num2 < 0) {
      (num1 = Math.abs(num1)), (num2 = Math.abs(num2));
    }
    while (num1 > 0) {
      if (num1 < num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
        diff = num1 - num2;
        num1 = diff;
      } else {
        diff = num1 - num2;
        num1 = diff;
      }
    }
    return num2;
  }

function getsmallestDivisibleInteger(n){
    let acc = 1;
    for(let i = 1; i <= n; i++){
        acc = (acc * i)/findGcd(acc, i)
    }
    return acc
}

//testcase
const testObj = [
    {
        n: 10,
        expected: 2520
    },
    {
        n: 20,
        expected: 232792560
    },
    {
        n: 5,
        expected: 60
    },
    {
        n: 2,
        expected: 2
    }
]

const testCase = (testObj) => {
    testObj.forEach((tCase, index) => {
        if(tCase.expected === getsmallestDivisibleInteger(tCase.n)){
            console.log(`Testcase passed for ${index}. Output is ${getsmallestDivisibleInteger(tCase.n)}`)
        }else {
            console.log(`Testcase failed for ${index}. Expected output is ${tCase.expected}, but got ${getsmallestDivisibleInteger(tCase.n)}`)
        }
    })
}

testCase(testObj)