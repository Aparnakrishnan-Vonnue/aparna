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


let inputArray = [ 1, 2, 7, 5,9, 8, 6,7, 10, 2, 3];

function returnLongestChain(iArray){
  let chain = []
  let setOfChains = []
  for(let start = 0; start < iArray.length; start++){
    chain.push(iArray[start])
    let tracker = start + 1
    let numberOfIteration = start + 1
    while(1){
      if(tracker > iArray.length - 1){
        setOfChains.push(chain)
        numberOfIteration++
        tracker = numberOfIteration
        chain = [iArray[start]]
        console.log(numberOfIteration, "n")
        console.log(tracker, "tracker")
      }
      if(numberOfIteration > iArray.length - 1){
        chain = []
        break;
      }
      if(iArray[tracker] > chain[chain.length - 1]){
        console.log(iArray[tracker], "---------------------------")
        chain.push(iArray[tracker])
      }
      // if(iArray[numberOfIteration] > chain[chain.length - 1]){
      //   chain.push(iArray[numberOfIteration])
      // }
      tracker++
    }
  }
  return setOfChains
}

console.log(returnLongestChain(inputArray))
