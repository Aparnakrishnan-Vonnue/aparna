let stringInput = "Assistant"

const frequencyOfLetters = (str) => {
  // debugger
  let frequency = 1
  let freqObj = {}
  let i = 0
  while(i < str.length){
    freqObj[str[i]] = 1
    if(str[i] === str[i + 1]){
      console.log(str[i])
    }
    i++
  }
  console.log(freqObj)
}

console.log(frequencyOfLetters(stringInput))