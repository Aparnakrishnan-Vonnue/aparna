//calculate the sum of elements in an array
function getSumOfElements(arr){
  let acc = 0;
  for(let i = 0; i < arr.length; i++){
    acc += arr[i]
  }
  return acc
}

console.log(getSumOfElements([0.5, 5.2, 3.2, 3, 6]))

//testcase
const testObj = [
    {
        array: [1, 2, 5, 8, 10],
        expectedSum: 26
    },
    {
        array: [-1, 2, -5, -10],
        expectedSum: -14
    },
    {
        array: [0, 5],
        expectedSum: 5
    },
    {
        array: [0.5, 5.2, 3.2, 3, 6],
        expectedSum: 17.9
    }
]

const testCase = (testObj) => {
    testObj.forEach((tCase, i) => {
        if(tCase.expectedSum === getSumOfElements(tCase.array)){
            console.log(`Testcase passed for ${i}, the sum is ${getSumOfElements(tCase.array)}`)
        }else{
            console.log(`Testcase failed for ${i}, expected sum is ${tCase.expectedSum}, but got ${getSumOfElements(tCase.array)}`)
        }
    })
} 

testCase(testObj)