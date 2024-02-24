//function that takes a string as argument. Get first 3 characters

function firstNCharactersOfString(string, n) {
  let characters = "";
  for (let i = 0; i < n; i++) {
    characters += string[i];
  }
  return characters;
}

//TESTCASE

const testObj = [
  {
    string: "good morning! have a nice day",
    n: 3,
    expected: "goo",
  },
  {
    string: "123456",
    n: 5,
    expected: "12345",
  },
  {
    string: "!@$example",
    n: 2,
    expected: "!@",
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.expected === firstNCharactersOfString(tCase.string, tCase.n)) {
      console.log(
        `Testcase passed for ${index}, the characters are ${firstNCharactersOfString(
          tCase.string,
          tCase.n
        )}`
      );
    } else {
      console.log(
        `Testcase failed for ${index}, the expected result is ${
          tCase.expected
        }, but got ${firstNCharactersOfString(tCase.string, tCase, n)}`
      );
    }
  });
};

testCase(testObj)