let stringInput = "   Hello world of programming a there   is there the    answeresdflksa              nksd nsnfnkasfdn   "


function returnLongestWord(str){
  let pointer = 0
  let i = 0;
  let maxLength = 0
  let startPosSave = 0
  let endPosSave = 0
  while( i < str.length){
    if(str[i] == " " || i == str.length - 1){
      if(maxLength < (i - pointer)){
       startPosSave = pointer
       endPosSave = i
       maxLength = (i - pointer)
      }
      pointer = i+1
    }
     
    i++
  }
  console.log(startPosSave, endPosSave)
  return str.slice(startPosSave, endPosSave)
  

}
console.log(returnLongestWord(stringInput))


