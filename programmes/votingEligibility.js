//function to check whether a person is eligible for voting based on age

function isEligibleForVoting(age) {
  let isEligible = false;
  if (age >= 18) {
    isEligible = true;
  }
  if (isEligible) {
    return "You are eligible for voting!";
  }
  return "You are not eligible for voting!";
}

//testcase
const testObj = [
  {
    age: 18,
    expected: "You are eligible for voting!",
  },
  {
    age: 10,
    expected: "You are not eligible for voting!",
  },
  {
    age: 2,
    expected: "You are not eligible for voting!",
  },
  {
    age: 22,
    expected: "You are eligible for voting!",
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, i) => {
    if (tCase.expected === isEligibleForVoting(tCase.age)) {
      console.log(
        `Testcase passed for ${i}, the output is ${isEligibleForVoting(
          tCase.age
        )}`
      );
    } else {
      console.log(
        `Testcase failed for ${i}, expected output: ${
          tCase.expected
        }, but got: ${isEligibleForVoting(tCase.age)}`
      );
    }
  });
};

testCase(testObj);
