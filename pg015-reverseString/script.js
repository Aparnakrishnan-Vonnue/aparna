let inputString = "Programming is fun and entertaining";

function reverseString() {
  // debugger
  let currentPosition = 0;
  let initialPoint = 0;
  let reversedStr = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === " " || i === inputString.length - 1) {
      if(i === inputString.length - 1){
        currentPosition = i
      }else{
        currentPosition = i - 1;
      }
      
      for (let j = currentPosition; j >= initialPoint; j--) {
        reversedStr += inputString[j];
      }
      if(i === inputString.length - 1){
        break;
      }
      initialPoint = i + 1;
      reversedStr += " "
    }
  }
  return reversedStr;
}

console.log(reverseString(inputString));
