let stringInput = "Hello world of programming"


function returnLongestWord(str){
  let indicator = 0
  let i = 0;
  let maxLength = 0
  let startingPosition = 0
  let endingPosition = 0
  while( i < str.length){
    if(str[i] == " " || i == str.length - 1){
      if(maxLength < (i - indicator)){
       startingPosition = pointer
       endingPosition = i
       maxLength = (i - indicator)
      }
      indicator = i+1
    }
     
    i++
  }
  return str.slice(startingPosition, endingPosition)
  

}
console.log(returnLongestWord(stringInput))


