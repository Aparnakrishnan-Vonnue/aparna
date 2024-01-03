//calculate the sum of all numbers from 1 to n

function getSum(n){
    let acc = 0
    for(let i = 0; i <= n; i++){
        acc += i
    }
    return acc
}

console.log(getSum(100))

//testcase

const testObj = [
    {
        n: 10,
        expectedSum: 55
    },
    {
        n: 5,
        expectedSum: 15
    },
    {
        n: 100,
        expectedSum: 5050
    },
    {
        n: 20,
        expectedSum: 210
    }
]

const testCase = (testObj) => {
    testObj.forEach((tCase, idx) => {
        if(tCase.expectedSum === getSum(tCase.n)){
            console.log(`Testcase passed for ${idx}. The sum is ${getSum(tCase.n)}`)
        }else {
            console.log(`Testcase failed for ${idx}. Expected sum is ${tCase.expectedSum} but got ${getSum(tCase.n)}`)
        }
    })
}

testCase(testObj)