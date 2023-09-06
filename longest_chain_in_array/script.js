let inputArray = [1, 7, 5, 2, 9];

function returnLongestChain(iArray) {
  //   debugger;
  let subArrayOne = [];
  let setOFSubArrays = [];
  for (let i = 0; i < iArray.length; i++) {
    subArrayOne.push(iArray[i]);
    for (let j = i + 1; j < iArray.length; j++) {
      if (subArrayOne[0] < iArray[j]) {
        if (iArray[j] > subArrayOne[subArrayOne.length - 1]) {
          subArrayOne.push(iArray[j]);
          if (
            iArray[j + 1] > subArrayOne[i] &&
            iArray[j + 1] > subArrayOne[j]
          ) {
            subArrayOne.push(iArray[j + 1]);
          }
        }
      }
    }
    setOFSubArrays.push(subArrayOne);
    subArrayOne = [];
  }
  return setOFSubArrays;
}

console.log(returnLongestChain(inputArray));
