let inputArray = [8, 6, 28, 5]

function selectionSort(iArray){
    let tempStore = 0
    let smallest = iArray[0]
  for(let i = 0; i < iArray.length; i++){
    for(let j = i + 1; j < iArray.length; j++){
        if(iArray[j] < smallest){
            smallest = inputArray[j]
            tempStore = iArray[i]
            iArray[i] = smallest
            iArray[j] = tempStore
        }
    }
  }
  console.log(iArray)
}

console.log(selectionSort(inputArray))

