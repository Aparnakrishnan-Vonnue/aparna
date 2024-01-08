//function that reverses a string

function myStack(maxVal) {
  let top = 0;
  let store = [];
  let max = maxVal;

  function isEmpty() {
    if (top === 0) {
      return true;
    }
    return false;
  }

  function isMax() {
    if (top === max) {
      return true;
    }
    return false;
  }

  function push(val) {
    let isPushed = false;
    if (!isMax()) {
      store[top] = val;
      top += 1;
      isPushed = true;
    } else {
      return "Maximum stack limit exceeded";
    }
    return isPushed;
  }

  function pop() {
    if (!isEmpty()) {
      top -= 1;
      return store[top];
    } else {
      return "stack is empty";
    }
  }

  return {
    isEmpty: isEmpty,
    isMax: isMax,
    push: push,
    pop: pop,
  };
}

//function to reverse a string using myStack

function reverseString(string) {
  let stringStack = myStack(string.length);
  let reversedString = "";
  for (let i = 0; i < string.length; i++) {
    stringStack.push(string[i]);
  }
  while (!stringStack.isEmpty()) {
    reversedString += stringStack.pop();
  }
  return reversedString;
}

console.log(reverseString("Stackoverflow is the best."));

//testcase

const testObj = [
  {
    string: "hey prabhu yeh kya hua",
    expected: "auh ayk hey uhbarp yeh",
  },
  {
    string: "Hello world",
    expected: "dlrow olleH",
  },
  {
    string: "Stackoverflow is the best.",
    expected: ".tseb eht si wolfrevokcatS",
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.expected === reverseString(tCase.string)) {
      console.log(
        `Testcase passed for ${index}, the reversed string is ${reverseString(
          tCase.string
        )}`
      );
    } else {
      console.log(
        `Testcase failed for ${index}, the expected output is ${
          tCase.expected
        }, but got ${reverseString(tCase.string)}`
      );
    }
  });
};

testCase(testObj);
