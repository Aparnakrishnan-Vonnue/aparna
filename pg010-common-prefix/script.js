let listOfStrings = ["apple", "app", "application"]

function longestCommonPrefix(list){
  // debugger
  let countOfCommonLetters = 0
  for(let i = 0; i < list.length; i++){
    if(list[i].length < list[i + 1].length){
      for(let j = 0; j < list[i].length; j++){     
       if(list[i][j] === list[i + 1][j]){
         countOfCommonLetters += 1
         console.log(countOfCommonLetters)
         console.log(list[i][j])
       }
      }
    }
  }
}

console.log(longestCommonPrefix(listOfStrings))