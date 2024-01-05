//function to check whether a string without spaces is a palindrome or not

function isPalindrome(string) {
  let isPalindrome = false;
  for (let i = 0, j = string.length - 1; i < string.length, j > 0; i++, j--) {
    if (string[i] === " ") {
      return isPalindrome;
    } else {
      if (string[i].toLocaleLowerCase() === string[j].toLocaleLowerCase()) {
        isPalindrome = true;
      } else {
        isPalindrome = false;
        return isPalindrome;
      }
    }
  }
  return isPalindrome;
}

//testcase
const testObj = [
  {
    string: "MadamImAdam",
    expected: true,
  },
  {
    string: "Madam, I'm Adam",
    expected: false,
  },
  {
    string: "malayalam",
    expected: true,
  },
  {
    string: "malayaLaM",
    expected: true,
  },
  {
    string: "amanaplanacanalpanama",
    expected: true,
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.expected === isPalindrome(tCase.string)) {
      console.log(
        `Testcase passed for ${index}. The output is ${isPalindrome(
          tCase.string
        )}`
      );
    } else {
      console.log(
        `Testcase failed for ${index}. The expected output is ${
          tCase.expected
        }, but got ${isPalindrome(tCase.string)}`
      );
    }
  });
};

testCase(testObj);
