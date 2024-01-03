//function that determines whether a given number is odd or even

function isOddOrEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}
console.log(isOddOrEven(0));

//testcase

const testObj = [
  {
    num: 2,
    expected: "even",
  },
  {
    num: 1,
    expected: "odd",
  },
  {
    num: -5,
    expected: "odd",
  },
  {
    num: 0,
    expected: "even",
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.expected === isOddOrEven(tCase.num)) {
      console.log(
        `Testcase passed for ${index}. The output is ${isOddOrEven(tCase.num)}`
      );
    } else {
      console.log(
        `Testcase failed for ${index},  Expected ${
          tCase.expected
        } but got ${isOddOrEven(tCase.num)}`
      );
    }
  });
};

testCase(testObj)