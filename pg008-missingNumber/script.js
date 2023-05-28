let arrayOfNum = [3, 4, 5, 6, 7, 8]

function findMissingInt(arr){
  // debugger
  for(let i = 0; i < arr.length; i++){
    if(arr[i + 1] !== arr[i] + 1){
      if(i === arr.length - 1){
        return arr[0] - 1
      }
      return arr[i] + 1
    }
    
  }
}

console.log(findMissingInt(arrayOfNum))