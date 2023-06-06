let inputString = "Hello World"

function reverseString(){
  // debugger
  let indicator = 0
  let initialPoint = 0
  let reversedStr = ""
  for(let i = 0; i < inputString.length; i++){
    if(inputString[i] === " " || i === inputString.length - 1){
      initialPoint = indicator
      indicator = i
      for(let j = indicator; j > initialPoint - 1; j--){
        reversedStr += inputString[j]
      }
    }
  }
  return reversedStr
 
}

console.log(reverseString(inputString))