let listOfNum = [1, 2, 3, 4, 5]

function maximumProduct(){
  // debugger
  let greaterNum = listOfNum[0]
  let maxNumArray = []
  for(let i = 0; i < listOfNum.length; i++){
    if(listOfNum[i] < listOfNum[i + 1]){
      greaterNum = listOfNum[i + 1]
        maxNumArray.push(greaterNum)
    }
  }
  return maxNumArray
}

console.log(maximumProduct(listOfNum))