let wordToCheck = "listen"
let sampleWord = "silent"

function toCheckWhetherAnagram(word, sample){
  let empty = ""
  for(let i = 0; i < word.length; i++){
    for(let j = 0; j < sample.length; j++){
      if(word[i] === sample[j]){
        console.log(sample[j])
        empty = sample[j]
        
      }
    }
    // return false
  }
  
}

console.log(toCheckWhetherAnagram(wordToCheck, sampleWord))