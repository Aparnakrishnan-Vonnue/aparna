//function to calculate whether average of all the elements in an array

function averageOfElements(arr) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i];
  }
  const average = acc / arr.length;
  return average;
}

console.log(averageOfElements([1, 5, 6, 8, 10]));

//testcase

const testObj = [
  {
    arr: [1, 5, 6, 8, 10],
    expectedAvg: 6,
  },
  {
    arr: [0, 5, 0, 0, 0, 10],
    expectedAvg: 2.5,
  },
  {
    arr: [-1, -10, 12, 18],
    expectedAvg: 4.75,
  },
  {
    arr: [0.8, 0.01, 0.5, 2, 8],
    expectedAvg: 2.262,
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.expectedAvg === averageOfElements(tCase.arr)) {
      console.log(
        `Testcase passed for ${index}. The average is ${averageOfElements(
          tCase.arr
        )}`
      );
    } else {
      console.log(
        `Testcase failed for ${index}, The expected average is ${
          tCase.expectedAvg
        } but got ${averageOfElements(tCase.arr)}`
      );
    }
  });
};

testCase(testObj);
