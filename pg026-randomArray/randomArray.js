// const arr = new Array(1000);
// console.log(arr[1])

// console.log(arr[2]);

// arr[8] = 650;

// console.log(arr[8])

// function foo(index){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] )
//     }
// }

const inputArray = [200, 5, 50, 73, 32, 560, 40];

function arrayManipulation(index, input, inputAtIndex) {
  inputArray[index] = inputAtIndex;
  if (input !== index) {
    inputArray[input] = 0;
  }
  return inputArray[input];
}

//Test case

const testObject = [
  {
    index: 4,
    input: 6,
    inputAtIndex: 500,
    expectedOutput: 0,
  },
  {
    index: 5,
    input: 5,
    inputAtIndex: 500,
    expectedOutput: 500,
  },
  {
    index: 0,
    input: 0,
    inputAtIndex: 500,
    expectedOutput: 500,
  },
];

const testCase = (testObject) => {
  for (let i = 0; i < testObject.length; i++) {
    if (
      testObject[i].expectedOutput ===
      arrayManipulation(
        testObject[i].index,
        testObject[i].input,
        testObject[i].inputAtIndex
      )
    ) {
      console.log(`Testcase passed for ${i}.`);
    } else {
      console.log(
        `Testcase failed for ${i}. expected output: ${
          testObject[i].expectedOutput
        }, got: ${arrayManipulation(
          testObject[i].index,
          testObject[i].input,
          testObject[i].inputAtIndex
        )}`
      );
    }
  }
};

testCase(testObject);

