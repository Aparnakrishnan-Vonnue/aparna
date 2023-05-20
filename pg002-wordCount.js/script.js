let sentenceOne = "This is a sample sentence"
let sentenceTwo = "Hello World"
let sentenceThree = "Programming is fun"
let sentenceFour = "Hello"

function returnCountOfWords(sentence){
  let i = 0
  let count = 0
  while (i < sentence.length){
    if(sentence[i] === " "){
      count = count + 1
    }
    if(i === sentence.length - 1){
      count = count + 1
      return count
    }
    if(i === sentence.length && sentence[i] !== ""){
      return 1
    }
    i++ 
  }
}

console.log(returnCountOfWords(sentenceOne))
console.log(returnCountOfWords(sentenceTwo))
console.log(returnCountOfWords(sentenceThree))
console.log(returnCountOfWords(sentenceFour))

