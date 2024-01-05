//calculate area of a rectangle

function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}

//testcase

const testObj = [
  {
    length: 10,
    width: 2,
    expectedArea: 20,
  },
  {
    length: 40,
    width: 20,
    expectedArea: 800,
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.expectedArea === areaOfRectangle(tCase.length, tCase.width)) {
      console.log(
        `Testcase passed for ${index}, area is ${areaOfRectangle(
          tCase.length,
          tCase.width
        )}`
      );
    } else {
      console.log(
        `Testcase failed for ${index}, expected area is ${
          tCase.expectedArea
        } but got ${areaOfRectangle(tCase.length, tCase.width)}`
      );
    }
  });
};

testCase(testObj);
