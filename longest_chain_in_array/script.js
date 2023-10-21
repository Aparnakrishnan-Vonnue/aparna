//ATTEMPT 1
// let inputArray = [1, 7, 5, 2, 9];

// function returnLongestChain(iArray) {
//   //   debugger;
//   let subArrayOne = [];
//   let setOFSubArrays = [];
//   for (let i = 0; i < iArray.length; i++) {
//     subArrayOne.push(iArray[i]);
//     for (let j = i + 1; j < iArray.length; j++) {
//       if (subArrayOne[0] < iArray[j]) {
//         if (iArray[j] > subArrayOne[subArrayOne.length - 1]) {
//           subArrayOne.push(iArray[j]);
//           if (
//             iArray[j + 1] > subArrayOne[i] &&
//             iArray[j + 1] > subArrayOne[j]
//           ) {
//             subArrayOne.push(iArray[j + 1]);
//           }
//         }
//       }
//     }
//     setOFSubArrays.push(subArrayOne);
//     subArrayOne = [];
//   }
//   return setOFSubArrays;
// }

// console.log(returnLongestChain(inputArray));

// ATTEMPT 2
// let inputArray = [1, 7, 5, 2, 9];

// function returnLongestChain(iArray) {
//   // debugger;
//   let chain = [];
//   let setOfChains = [];
//   let start = 0;
//   // let temp = [];
//   while (start < iArray.length) {
//     chain.push(iArray[start]);
//     let trackerIndex = start + 1;
//     while (trackerIndex < iArray.length) {
//       if (iArray[trackerIndex] > chain[chain.length - 1]) {
//         chain.push(iArray[trackerIndex]);
//       }

//       // if (temp.length) {
//       //   if (iArray[trackerIndex] > temp[temp.length - 1]) {
//       //     temp.push(iArray[trackerIndex]);
//       //   }
//       // } else {
//       //   temp.push(iArray[start], iArray[trackerIndex]);
//       // }

//       trackerIndex++;
//       // if(iArray.length){
//       //   trackerIndex = start + 1
//       // }
//     }
//     setOfChains.push(chain);
//     // setOfChains.push(temp);
//     start++;
//     chain = [];
//     // temp = [];
//     return setOfChains;
//   }
// }

// console.log(returnLongestChain(inputArray));

//ATTEMPT 3
// let inputArray = [1, 7, 5, 2, 9];

// function returnLongestChain(iArray) {
//   let chain = [];
//   let setOfChains = [];
//   let start = 0;

//   while (start < iArray.length) {
//     chain.push(iArray[start]);
//     let trackerIndex = start + 1;
//     while (trackerIndex < iArray.length) {
//       if (iArray[trackerIndex] > chain[chain.length - 1]) {
//         chain.push(iArray[trackerIndex]);
//       }
//       trackerIndex++;
//     }
//     console.log(chain)
//     setOfChains.push(chain);
//     chain = [];
//     start++;
//   }
//   return setOfChains
// }

// console.log(returnLongestChain(inputArray));

//Attempt 4
// let inputArray = [ 1, 2, 7, 5,9, 8, 6,7, 10, 2, 3];

// function returnLongestChain(iArray){
//   let chain = []
//   let setOfChains = []
//   for(let start = 0; start < iArray.length; start++){
//     chain.push(iArray[start])
//     let tracker = start + 1
//     let numberOfIteration = start + 1
//     while(1){
//       if(tracker > iArray.length - 1){
//         setOfChains.push(chain)
//         numberOfIteration++
//         tracker = numberOfIteration
//         chain = [iArray[start]]
//       }
//       if(numberOfIteration > iArray.length - 1){
//         chain = []
//         break;
//       }
//       if(iArray[tracker] > chain[chain.length - 1]){
//         chain.push(iArray[tracker])
//       }
//       tracker++
//     }
//   }
//   return setOfChains
// }

// console.log(returnLongestChain(inputArray))

//Attempt 5
let inputArray = [2, 6, 3, 4, 8, 2, 1, 6, 10];
// let inputArray = [ 1, 2, 7,1,-1, 5,9, 8, 6,7, 10, 2, 3];
// let inputArray = [0, -6, 2, -3, 4, -1, 0, 10, 3, 0, 5                                              ]


function returnLongestChainInArray(iArray) {
  let chain = [];
  let setOfChains = [];
  let numberOfIteration = 0;
  let tracker = numberOfIteration
  for (let start = 0; start < iArray.length; start++) {
    numberOfIteration = start + 1;
    chain.push(iArray[start]);
    tracker = numberOfIteration
    while (1) {
        if(tracker > iArray.length - 1){
            setOfChains.push(chain)
            numberOfIteration++
            tracker = numberOfIteration
            chain = [iArray[start]]
        }
      if (numberOfIteration > iArray.length - 1) {
        chain = []
        break;
      }
      if (iArray[tracker] > chain[chain.length - 1]) {
        chain.push(iArray[tracker]);
      }
      tracker++
    }
  }
  let longest = setOfChains[0].length
  for(let index = 0; index < setOfChains.length; index++){
    if(setOfChains[index].length > longest){
        longest = setOfChains[index]
    }
    longest = setOfChains[0]
  }
  console.log(longest);
  return longest
}
//returnLongestChainInArray(inputArray);


