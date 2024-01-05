//function to remove spaces from a string

function removeSpaces(string) {
  let strArray = string.split("");
  let newString = "";
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === " ") {
      strArray.splice(i, 1);
      if (i === strArray.length) {
        break;
      }
    }
    newString += strArray[i];
  }
  return newString;
}

//testcase

const testObj = [
  {
    string: "hey prabhu yeh kya hua",
    expected: "heyprabhuyehkyahua",
  },
  {
    string: "hello world",
    expected: "helloworld",
  },
  {
    string: " a e i o u ",
    expected: "aeiou",
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.expected === removeSpaces(tCase.string)) {
      console.log(
        `Testcase passed for ${index}, the output is ${removeSpaces(
          tCase.string
        )}`
      );
    } else {
      console.log(
        `Testcase failed for ${index}. The expected output is ${
          tCase.expected
        } but got ${removeSpaces(tCase.string)}`
      );
    }
  });
};

testCase(testObj);
