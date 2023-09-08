let inputArray = [8, 6, 28, 5]

function selectionSort(iArray){
  let smallest = 0
  let sortedSubList = []
  let temp = 0
  for(let i = 0; i < iArray.length + 2; i++){
    smallest = iArray[0]
    for(let j = i; j < iArray.length; j++){
        if(iArray[j] < smallest){
          smallest = iArray[j]
        }
      }
      sortedSubList.push(smallest)
      iArray.splice(iArray.indexOf(smallest), iArray.indexOf(smallest))
    }
 return(sortedSubList)
}

console.log(selectionSort(inputArray))


