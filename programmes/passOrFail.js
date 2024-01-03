//function that returns pass for score above 60 and fail otherwise

function isPassOrFail(score) {
  return score > 60 ? "Pass" : "Fail";
}

//testcase
const testObj = [
  {
    score: 60,
    expected: "Fail",
  },
  {
    score: 59,
    expected: "Fail",
  },
  {
    score: 80,
    expected: "Pass",
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.expected === isPassOrFail(tCase.score)) {
      console.log(
        `Testcase passed for ${index}, the result is ${isPassOrFail(
          tCase.score
        )}`
      );
    } else {
      console.log(
        `Testcase failed for ${index}, expected ${
          tCase.expected
        } but got ${isPassOrFail(tCase.score)}`
      );
    }
  });
};

testCase(testObj)