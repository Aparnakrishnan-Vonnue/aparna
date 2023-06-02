// let listOfString = ["programming", "is", "fun"]
// let listOfString = ["apple", "banana", "orange"]
let listOfString = ["cat", "dog", "elephant", "tiger"]

function longestWordInList(){
  // debugger
  let longestWord = listOfString[0]
  for(let i = 1; i < listOfString.length; i++){
      if(longestWord.length < listOfString[i].length){
        longestWord = listOfString[i]
      }
    }
    return longestWord
  }

console.log(longestWordInList(listOfString))
