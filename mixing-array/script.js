const mixArrayWRTOffset = (arr1, arr2, offset) => {
  let newArray = [];
  let i = 0;
  let j = 0;
  let temp = [];

  if (offset < 0) {
    temp = arr1;
    arr1 = arr2;
    arr2 = temp;
    while (i < arr1.length && j < arr2.length) {
      newArray = newArray.concat(
        arr1.slice(i, i - offset),
        arr2.slice(j, j - offset)
      );
      i = i - offset;
      j = j - offset;
    }
    newArray = newArray.concat(arr1.slice(i), arr2.slice(j));
  } else if (offset > 0) {
    while (i < arr1.length && j < arr2.length) {
      newArray = newArray.concat(
        arr1.slice(i, i + offset),
        arr2.slice(j, j + offset)
      );
      i = i + offset;
      j = j + offset;
    }
    newArray = newArray.concat(arr1.slice(i), arr2.slice(j));
  } else {
    newArray = [];
  }
  return newArray;
};

//TEST CASES
const testCases = [
  { offset: 0, firstArray: [2, 4, 6, 8], secondArray: [3, 5, 7], expected: [] },
  {
    offset: 1,
    firstArray: [2, 4, 6, 8],
    secondArray: [3, 5, 7],
    expected: [2, 3, 4, 5, 6, 7, 8],
  },
  {
    offset: -1,
    firstArray: [2, 4, 6, 8],
    secondArray: [3, 5, 7],
    expected: [3, 2, 5, 4, 7, 6, 8],
  },
  {
    offset: -2,
    firstArray: [1],
    secondArray: [-1, -2, 0, 1, 2],
    expected: [-1, -2, 1, 0, 1, 2],
  },
  {
    offset: 4,
    firstArray: [1, 2, 3, 4],
    secondArray: [2, 3],
    expected: [1, 2, 3, 4, 2, 3],
  },
  {
    offset: 5,
    firstArray: [2, 4, 6, 8],
    secondArray: [3, 5, 7],
    expected: [2, 4, 6, 8, 3, 5, 7],
  },
];

const testCase = (testCases) => {
  testCases.forEach((tCase, idx) => {
    let firstArray = tCase.firstArray;
    let secondArray = tCase.secondArray;
    let offset = tCase.offset;
    let outPut = tCase.expected;
    let i = 0;
    let j = 0;
    const functionToBeTested = mixArrayWRTOffset(
      firstArray,
      secondArray,
      offset
    );
    while (i < outPut.length && j < functionToBeTested.length) {
      if (outPut[i] === functionToBeTested[j]) {
        if (i === outPut.length - 1 && j === functionToBeTested.length - 1) {
          console.log(`TestCase for ${idx} passed`);
        }
      } else {
        console.log(
          `Testcase for ${idx} failed. Expected value: ${outPut}, result: ${functionToBeTested}`
        );
      }
      i++;
      j++;
    }
  });
};

testCase(testCases);

//ATTEMPT 1
// const mixArrayWRTOffset = (arr1, arr2, offset) => {
//   arr1.push(...arr2)
//   let newArray = arr1
//     for (let i = 0; i < newArray.length; i++) {
//       let j = i + offset
//       const temp = newArray[j]
//       newArray[j] =
//     }
//     console.log(newArray)
// }

//ATTEMPT 2
// const mixArrayWRTOffset = (arr1, arr2, offset) => {
//   // debugger
//   let newArray = []
//   let i = 0
//   while(i < (arr1.length + arr2.length)){
//     if(i < offset){
//       newArray.push(arr1[i])
//     }
//     else if((i - offset) < arr2.length && i % 2 !== 0){
//       newArray.push(arr2[i])
//     }
//     else{
//       newArray.push(arr1[i - offset])
//     }
//     i++
//   }
//  return newArray
// }

//ATTEMPT 3
// const mixArrayWRTOffset = (arr1, arr2, offset) => {
//   // debugger
//   let newArray = []
//   let i = 0
//   let j = 0
//   let k = 0
//   while(i < arr1.length + arr2.length){
//      if(i < offset){
//         newArray.push(arr1[j])
//         j++;
//      }
//       else if ((i - offset) < arr2.length && i % 2 !== 0){
//         newArray.push(arr2[k])
//         k++;
//       }
//       else{
//         newArray.push(arr1[i - j])
//       }
//       i++
//     }
//     return newArray
//   }
