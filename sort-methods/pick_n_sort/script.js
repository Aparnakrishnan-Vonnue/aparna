function sortAnArray(iArray) {
  let startIndex = 0;
  let tempStorage = 0;
  while (startIndex < iArray.length) {
    let smallestElement = iArray[startIndex];
    let trackerIndex = startIndex + 1;
    while (trackerIndex < iArray.length) {
      if (iArray[trackerIndex] < smallestElement) {
        smallestElement = iArray[trackerIndex];
        tempStorage = iArray[startIndex];
        iArray[startIndex] = smallestElement;
        iArray[trackerIndex] = tempStorage;
      }
      trackerIndex++;
    }
    startIndex++;
  }
  return iArray;
}


const testCases = [
  {
    inputArray: [1, 5, 3, 8],
    expectedOutPut: [1, 3, 5, 8],
  },
  {
    inputArray: [0, 100, 1, 1000],
    expectedOutPut: [0, 1, 100, 1000],
  },
  {
    inputArray: [-80, -10, 5, 0, 25, -11, 6],
    expectedOutPut: [-80, -11, -10, 0, 5, 6, 25],
  },
  {
    inputArray: [0.8, 0.25, 0.1, 20, 6, 0.01],
    expectedOutPut: [0.01, 0.1, 0.25, 0.8, 6, 20],
  },
  {
    inputArray: [1, 2, 3, 4, 5, 6, 7, 8],
    expectedOutPut: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    inputArray: [100, 99, 98, 97, 96],
    expectedOutPut: [96, 97, 98, 99, 100],
  },
  {
    inputArray: [1, 8, 1, 8, 5, 8],
    expectedOutPut: [1, 1, 5, 8, 8, 8],
  },
  {
    inputArray: [],
    expectedOutPut: [],
  },
];

function testFunctionToSortAnArray(tCases) {
  tCases.forEach((tCase, idx) => {
    for (
      let i = 0, j = 0;
      i < tCase.expectedOutPut.length &&
      j < sortAnArray(tCase.inputArray).length;
      i++, j++
    ) {
      if (tCase.expectedOutPut[i] === sortAnArray(tCase.inputArray)[j]) {
        if (
          i === tCase.expectedOutPut.length - 1 &&
          j === sortAnArray(tCase.inputArray).length - 1
        ) {
          console.log(`Testcase ${idx} passed`);
        }
      } else {
        console.log(
          `Testcase for ${idx} failed. The expected result was ${
            tCase.expectedOutput
          }, but got ${sortAnArray(tCase.inputArray)}`
        );
      }
    }
  });
}

testFunctionToSortAnArray(testCases);
