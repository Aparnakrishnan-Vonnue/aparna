let stringInput = "Hello world of programming"


function returnLongestWord(str){
  let indicator = 0
  let i = 0;
  let maxLength = 0
  let startingPossition = 0
  let endingPosition = 0
  while( i < str.length){
    if(str[i] == " " || i == str.length - 1){
      if(maxLength < (i - indicator))
       startingPossition = indicator
       endingPosition = i
       maxLength = (i - indicator)
      }
      indicator = i + 1

    }
     
    i++
  }
  console.log(startingPossition, endingPosition)
  return str.slice(startingPossition, endingPosition)

  

}
console.log(returnLongestWord(stringInput))


