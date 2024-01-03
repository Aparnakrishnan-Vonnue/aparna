//function that reverses the elements in an array

function myStack(maxVal) {
  let top = 0;
  let max = maxVal;
  let store = [];

  function isEmpty() {
    return top === 0;
  }

  function isMax() {
    return top === max;
  }

  function push(val) {
    let isPushed = false;
    if (!isMax()) {
      store[top] = val;
      top += 1;
      isPushed = true;
    }
    return isPushed;
  }

  function pop() {
    if (!isEmpty()) {
      top -= 1;
      return store[top];
    }
  }

  function showStore() {
    return store;
  }

  return { isEmpty, isMax, push, pop, showStore };
}

function reverseArray(arr) {
  let newStack = myStack(arr.length);
  let reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    newStack.push(arr[i]);
  }
  while (!newStack.isEmpty()) {
    reversedArray.push(newStack.pop());
  }
  return reversedArray;
}

// console.log(reverseArray([1, 2]));

//testcase
const testObj = [
  {
    inputArray: [1, 2],
    expectedOutput: [2, 1],
  },
  {
    inputArray: [4, 2, 8, 6],
    expectedOutput: [6, 8, 2, 4],
  },
  {
    inputArray: [0, 8, 6],
    expectedOutput: [6, 8, 0],
  },
  {
    inputArray: ["apple", "orange", "grapes", "tomato"],
    expectedOutput: ["tomato", "grapes", "orange", "apple"],
  },
];

const testCase = (testObj) => {
  testObj.forEach((tCase, index) => {
    if (tCase.inputArray.length !== reverseArray(tCase.inputArray).length) {
      console.log(
        `Testcase failed for ${index}, expected output is ${
          tCase.expectedOutput
        } but got ${reverseArray(tCase.inputArray)}`
      );
    }
    for(let i = 0; i < tCase.expectedOutput.length; i++){
        if(tCase.expectedOutput[i] !== reverseArray(tCase.inputArray)[i]){
            console.log(
                `Testcase failed for ${index}, expected output is ${
                  tCase.expectedOutput
                } but got ${reverseArray(tCase.inputArray)}`
              ); 
        }
    }
     console.log(`Testcase passed for ${index}, the reversed array is ${reverseArray(tCase.inputArray)}`)
  });
};

testCase(testObj)