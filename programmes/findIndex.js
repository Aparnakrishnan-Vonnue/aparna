//function that find the index of a particular element in an array

function findIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

//testcase

const testObj = [
  {
    inputArray: [0, 1, 2],
    element: 2,
    expected: 2,
  },
  {
    inputArray: [0, 1, 2],
    element: 4,
    expected: -1,
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.expected === findIndex(tCase.inputArray, tCase.element)) {
      console.log(
        `Testcase passed for ${index}, output is ${findIndex(
          tCase.inputArray,
          tCase.element
        )}`
      );
    } else {
      console.log(
        `Testcase failed for ${index}, expected output is ${
          tCase.expected
        } but got ${findIndex(tCase.inputArray, tCase.element)}`
      );
    }
  });
};

testCase(testObj);
