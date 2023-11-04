// function convergentSeriesMaxLength(num1, num2) {
//   let sequence = [num1];
//   let numOfIteration = num1;
//   let lengthArray = [];

//   while (numOfIteration <= num2) {
//     if (num1 === 0) {
//       return `this will result in an infinite loop`;
//     }
//     if (!sequence.length) {
//       sequence.push(numOfIteration);
//     }
//     for (let j = 0; j <= sequence.length; j++) {
//       let inputNum = sequence[j];
//       if (inputNum % 2 === 0) {
//         sequence.push(inputNum / 2);
//       } else {
//         sequence.push(3 * inputNum + 1);
//       }
//       if (sequence[sequence.length - 1] === 1) {
//         lengthArray.push(sequence.length);
//         sequence = [];
//         break;
//       }
//     }
//     numOfIteration++;
//   }

//   let longest = lengthArray[0];

//   lengthArray.forEach((length) => {
//     if (length > longest) {
//       longest = length;
//     }
//   });

//   return `The longest convergent series for ${num1}, ${num2} is ${longest}`;
// }

// console.log(convergentSeriesMaxLength(100000, 10000000))

// testLongestChainBtwTwoNumbers(testCases);

// function convergentSeriesMaxLength(num1, num2) {
//     let sequence = [num1];
//     let numOfIteration = num1;
//     let length = 0;

//   while (numOfIteration <= num2) {
//     if (num1 === 0) {
//       return `this will result in an infinite loop`;
//     }
//     if (!sequence.length) {
//       sequence.push(numOfIteration);
//     }
//     for (let j = 0; j <= sequence.length; j++) {
//       let inputNum = sequence[j];
//       inputNum % 2 === 0
//         ? sequence.push(inputNum / 2)
//         : sequence.push(3 * inputNum + 1);
//       if (sequence[sequence.length - 1] === 1) {
//           if (sequence.length > length) {
//           length = sequence.length;
//           sequence = [];
//         }
//         sequence = [];
//         break;
//       }
//     }
//     numOfIteration++;
//   }
//   return `The longest convergent series for ${num1}, ${num2} is ${length}`;
// }

console.log(convergentSeriesMaxLength(2, 10000000));


const testCases = [
  {
    num1: 2,
    num2: 3,
    expectedOutput: `The longest convergent series for ${2}, ${3} is ${8}`,
  },
  {
    num1: 1,
    num2: 5,
    expectedOutput: `The longest convergent series for ${1}, ${5} is ${8}`,
  },
  {
    num1: 2,
    num2: 6,
    expectedOutput: `The longest convergent series for ${2}, ${6} is ${9}`,
  },
  {
    num1: 0,
    num2: 1,
    expectedOutput: "this will result in an infinite loop",
  },
  {
    num1: 1,
    num2: 10,
    expectedOutput: `The longest convergent series for ${1}, ${10} is ${20}`,
  },
  {
    num1: 5,
    num2: 5,
    expectedOutput: `The longest convergent series for ${5}, ${5} is ${6}`,
  },
  {
    num1: 1,
    num2: 10000000,
    expectedOutput: `The longest convergent series for ${1}, ${10000000} is ${686}`,
  },
];

function testLongestChainBtwTwoNumbers(tCases) {
  tCases.forEach((tCase, idx) => {
    if (
      tCase.expectedOutput === convergentSeriesMaxLength(tCase.num1, tCase.num2)
    ) {
      console.log(
        `Testcase for ${idx} passed. The out put is: ${tCase.expectedOutput}`
      );
    } else {
      console.log(
        `Testcase for ${idx} failed. The expected output was ${
          tCase.expectedOutput
        }, but got ${convergentSeriesMaxLength(tCase.num1, tCase.num2)}`
      );
    }
  });
}

// function convergentSeriesMaxLength(num1, num2) {
//   let sequence = [num1];//[10]
//   let numOfIteration = num1;//10
//   let length = 0;
//   let dictionary = {};

//   function getSeriesLength(inputNum) {
//     if (dictionary[inputNum]) {
//       return dictionary[inputNum];
//     }
//     if (inputNum === 1) {
//       return 1;
//     }
//     if (inputNum % 2 === 0) {
//       return 1 + getSeriesLength(inputNum / 2);
//     } else {
//       return 1 + getSeriesLength(3 * inputNum + 1);
//     }
//   }

//   while (numOfIteration <= num2) {//10 <= 40
//     if (num1 === 0) {
//       return `This will result in an infinite loop`;
//     }
//     if (!sequence.length) {
//       sequence.push(numOfIteration);
//     }
//     for (let j = 0; j < sequence.length; j++) {
//       let inputNum = sequence[j]; //10
//       let seriesLength = getSeriesLength(inputNum);
//       if (seriesLength > length) {
//         length = seriesLength;
//         dictionary[inputNum] = length;
//       }
//       if (sequence[sequence.length - 1] === 1) {
//         sequence = [];
//         break;
//       }
//     }
//     numOfIteration++;
//   }
//   console.log(dictionary);
//   return `The longest convergent series for ${num1}, ${num2} is ${length}`;
// }

// console.log(convergentSeriesMaxLength(1, 100000));

function convergentSeriesMaxLength(num1, num2) {
  let sequence = [num1];
  let numOfIteration = num1;
  let length = 0;
  let dictionary = {}

while (numOfIteration <= num2) {
  if (num1 === 0) {
    return `this will result in an infinite loop`;
  }
  if (!sequence.length) {
    sequence.push(numOfIteration);
  }
  for (let j = 0; j <= sequence.length; j++) {
    let inputNum = sequence[j];
    inputNum % 2 === 0
      ? sequence.push(inputNum / 2)
      : sequence.push(3 * inputNum + 1);
    if (sequence[sequence.length - 1] === 1) {
        if (sequence.length > length) {
        length = sequence.length;
        sequence = [];
      }
      sequence = [];
      break;
    }
  }
  numOfIteration++;
}
return `The longest convergent series for ${num1}, ${num2} is ${length}`;
}