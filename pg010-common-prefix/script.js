let listOfStrings = ["flower", "flow", "flight"]

function longestCommonPrefix(list){
  // debugger
  for(let i = 0; i < list.length; i++){
   for(let j = 0; j < list[i].length; j++){
    console.log(list[i][j])
   }
  }
}

console.log(longestCommonPrefix(listOfStrings))