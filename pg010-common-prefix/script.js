let listOfStrings = ["flower", "flow", "flight"]

function returnSmallWord(list){
  // debugger 
  let smallestWord = ""
  for(let i = 0; i < list.length; i++){
    if(list[i].length < list[i + 1].length){
     smallestWord += list[i]
      longestCommonPrefix(smallestWord, list)
    }
  }
}

console.log(returnSmallWord(listOfStrings))

function longestCommonPrefix(smallestWord, list){
  let countOfCommonLetters = 0
  let emptyString = []
  for (let i = 0; i < smallestWord.length; i++){
    for(let j = 0; j < list[i].length; j++){  
      if(smallestWord[i] === list[i][j]){
        countOfCommonLetters += 1
        console.log(countOfCommonLetters)
        emptyString.push(list[i][j])
      }
      
    }
    return emptyString
  }
}