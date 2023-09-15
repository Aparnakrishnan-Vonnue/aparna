function longestSequenceBtwTwoNumbers(num1, num2) {
  let mainArray = [];
  let sequence = [num1];
  let setOfSequences = [];
  let resultantArray = [];
  for (let i = num1; i <= num2; i++) {
    mainArray.push(i);
  }
  for (let start = 0; start < mainArray.length; start++) {
    if (num1 === 0) {
      return `this will result in an infinite loop`;
    }
    if (sequence.length === 0) {
      sequence.push(mainArray[start]);
    }
    for (let j = 0; j <= sequence.length; j++) {
      let inputNum = sequence[j];
      if (inputNum % 2 === 0) {
        sequence.push(inputNum / 2);
      } else {
        sequence.push(3 * inputNum + 1);
      }
      if (sequence[sequence.length - 1] === 1) {
        setOfSequences.push(sequence);
        sequence = [];
        break;
      }
    }
  }
  let longest = setOfSequences[0].length;
  setOfSequences.forEach((sequence) => {
    if (sequence.length > longest) {
      longest = sequence.length;
    }
  });
  resultantArray.push(num1, num2, longest);
  return resultantArray;
}

const testCases = [
  {
    num1: 2,
    num2: 3,
    expectedOutput: [2, 3, 8],
  },
  {
    num1: 1,
    num2: 5,
    expectedOutput: [1, 5, 8],
  },
  {
    num1: 2,
    num2: 6,
    expectedOutput: [2, 6, 9],
  },
  {
    num1: 0,
    num2: 1,
    expectedOutput: "this will result in an infinite loop",
  },
  {
    num1: 1,
    num2: 10,
    expectedOutput: [1, 10, 20],
  },
  {
    num1: 5,
    num2: 5,
    expectedOutput: [5, 5, 6],
  },
];

function testLongestChainBtwTwoNumbers(tCases) {
  tCases.forEach((tCase, idx) => {
    for (
      let i = 0, j = 0;
      i < tCase.expectedOutput.length,
        j < longestSequenceBtwTwoNumbers(tCase.num1, tCase.num2).length;
      i++, j++
    ) {
      if (
        tCase.expectedOutput[i] ===
        longestSequenceBtwTwoNumbers(tCase.num1, tCase.num2)[j]
      ) {
        console.log(`Testcase for ${idx} passed`);
      } else {
        console.log(
          `Testcase for ${idx} failed. Expected output was ${
            tCase.expectedOutput
          } but got ${longestSequenceBtwTwoNumbers(tCase.num1, tCase.num2)}`
        );
      }
    }
  });
}

testLongestChainBtwTwoNumbers(testCases);
