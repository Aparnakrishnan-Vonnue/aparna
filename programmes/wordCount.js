//function to count words in a sentence

function wordCount(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " " || i === string.length - 1) {
      count += 1;
    }
  }
  return count;
}

//testcase

const testObj = [
  {
    string: "India is my country",
    expected: 4,
  },
  {
    string: "mango",
    expected: 1,
  },
];

const testCase = (testObj) => {
    testObj.forEach((tCase, index) => {
      if (tCase.expected === wordCount(tCase.string)) {
        console.log(
          `Testcase passed for ${index}. The output is ${wordCount(
            tCase.string
          )}`
        );
      } else {
        console.log(
          `Testcase failed for ${index}. The expected output is ${
            tCase.expected
          }, but got ${wordCount(tCase.string)}`
        );
      }
    });
  };

  testCase(testObj)