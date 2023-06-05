listOfString = ["open", "source", "programming", "is", "fun"]
// listOfString = ["hello", "world"]
// listOfString = ["cat", "dog", "elephant", "tiger"]

function sortBasedOnLength(list){
  let tempStorage = list[0]
  for(let i = 0; i < list.length; i++){
    for(let j = i + 1; j < list.length; j++){
      if(list[i].length > list[j].length){
        tempStorage = list[j]
        list[j] = list[i]
        list[i] = tempStorage
      }
    }
  }
  return list
}
console.log(sortBasedOnLength(listOfString))