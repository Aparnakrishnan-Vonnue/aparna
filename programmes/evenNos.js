//function that returns even nos from 1 to n

function listOfEvenNumbers(n) {
  let list = [];
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      list.push(i);
    }
  }
  return list;
}

console.log(listOfEvenNumbers(2));

const testObj = [
  {
    n: 10,
    expectedList: [2, 4, 6, 8],
  },
  {
    n: 50,
    expectedList: [
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
      40, 42, 44, 46, 48,
    ],
  },
  {
    n: 2,
    expectedList: [],
  },
];

const testCase = (testObj) => {
    testObj.forEach((tCase, index) => {
        for(let i = 0, j = 0 ; i < tCase.expectedList.length, j < listOfEvenNumbers(tCase.n).length; i++, j++){
           if(tCase.expectedList[i] === listOfEvenNumbers(tCase.n)[j]){
            console.log(`Testcase passed for ${index}, the list of even number is ${listOfEvenNumbers(tCase.n)}`)
           }else{
            console.log(`Testcase failed for ${index}. Expected: ${tCase.expectedList}, got ${listOfEvenNumbers(tCase.n)}`)
           }
        }
    })
}

testCase(testObj)