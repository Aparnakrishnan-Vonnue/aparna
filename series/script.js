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

// function convergentSeriesMaxLength(num1, num2) {
//   let sequence = [num1];
//   let numOfIteration = num1;
//   let length = 0;
//   let dictionary = [];

//   while (numOfIteration <= num2) {
//     if (num1 === 0) {
//       return `this will result in an infinite loop`;
//     }
//     if (!sequence.length) {
//       sequence.push(numOfIteration);
//     }
//     for (let j = 0; j <= sequence.length; j++) {
//       let inputNum = sequence[j];
//       dictionary.forEach((obj) => {
//         Object.entries(obj).map(([key, value]) => {
//           if (key === inputNum) {
//             return;
//           }
//         });
//       });
//       inputNum % 2 === 0
//         ? sequence.push(inputNum / 2)
//         : sequence.push(3 * inputNum + 1);
//       if (sequence[sequence.length - 1] === 1) {
//         if (sequence.length > length) {
//           length = sequence.length;
//           for (let i = 0; i < sequence.length; i++) {
//             dictionary.push({
//               [sequence[i]]: sequence.length - i,
//             });
//           }
//           sequence = [];
//         }
//         sequence = [];
//         break;
//       }
//     }
//     numOfIteration++;
//   }
//   // return dictionary
//   return `The longest convergent series for ${num1}, ${num2} is ${length}`;
// }

// console.log(convergentSeriesMaxLength(10, 40));

// function convergentSeriesMaxLength(num1, num2) {
//   let maxSeqLength = 0;
//   let maxSeqStartingNum = 0;
//   let dictionary = new Map();

//   for (let i = num1; i <= num2; i++) {
//     let sequence = [i];
//     let currentNum = i;

//     while (currentNum !== 1) {
//       if (dictionary.has(currentNum)) {
//         let stepsFromDictionary = dictionary.get(currentNum);
//         for (let j = 0; j < sequence.length - 1; j++) {
//           dictionary.set(
//             sequence[j],
//             stepsFromDictionary + sequence.length - j
//           );
//         }
//         break;
//       }
//       if (currentNum % 2 === 0) {
//         currentNum = currentNum / 2;
//       } else {
//         currentNum = 3 * currentNum + 1;
//       }
//       sequence.push(currentNum);
//     }

//     for (let j = 0; j < sequence.length; j++) {
//       if (dictionary.has(sequence[j])) {
//         break;
//       }
//       dictionary.set(sequence[j], sequence.length - j);
//     }

//     if (sequence.length > maxSeqLength) {
//       maxSeqLength = sequence.length;
//       maxSeqStartingNum = i;
//     }
//   }
//   // console.log(dictionary);
//   // return dictionary
//   return `The longest convergent seriees for ${num1}, ${num2} starts with ${maxSeqStartingNum} and has a length of ${maxSeqLength}`;
// }

function getSequenceLength(num, dictionary) {
  if (dictionary[num]) {
    return dictionary[num];
  }
  let length = 1;
  let originalNum = num;
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = 3 * num + 1;
    }
    if (dictionary[num]) {
      length += dictionary[num];
      break;
    }
    length++;
  }
  dictionary[originalNum] = length;
  return length;
}

function convergentSeriesMaxLength(num1, num2) {
  let maxLength = 0;
  const dictionary = {};

  for (let i = num1; i <= num2; i++) {
    const length = getSequenceLength(i, dictionary);
    if (length > maxLength) {
      maxLength = length;
    }
  }

  return maxLength;
}

const testCases = [
  {
    num1: 2,
    num2: 3,
    expectedOutput: 8,
  },
  {
    num1: 1,
    num2: 5,
    expectedOutput: 8,
  },
  {
    num1: 2,
    num2: 6,
    expectedOutput: 9,
  },
  {
    num1: 1,
    num2: 10,
    expectedOutput: 20,
  },
  {
    num1: 5,
    num2: 5,
    expectedOutput: 6,
  },
  {
    num1: 1,
    num2: 10000000,
    expectedOutput: 686,
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

console.log(testLongestChainBtwTwoNumbers(testCases));
