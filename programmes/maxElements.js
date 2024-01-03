//find the maximum elements in an array

function maxElementsInArray(arr) {
  return arr.length;
}

// console.log(maxElementsInArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//testcase
const testObj = [
  {
    array: [],
    expected: 0,
  },
  {
    array: [1, 2, 3],
    expected: 3,
  },
  {
    array: [2],
    expected: 1,
  },
  {
    array: ["hello", "world", "good", "morning!"],
    expected: 4,
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.expected === maxElementsInArray(tCase.array)) {
      console.log(
        `Testcase passed for ${index}, output is ${maxElementsInArray(
          tCase.array
        )}`
      );
    } else {
      console.log(
        `Testcase failed for ${index}, expected output was ${
          tCase.expected
        }, but got ${maxElementsInArray(tCase.array)}`
      );
    }
  });
};

testCase(testObj);
