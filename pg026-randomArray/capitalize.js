function changeToTitleCase(sentence){
    let newSentence = ""
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] === " "){
           newSentence +=  sentence.charAt(i + 1).toUpperCase() + sentence.slice(i+2)
        }else if(i === 0){
            newSentence +=  sentence.charAt(i).toUpperCase() + sentence.slice(1)
        }
        sentence = newSentence
        newSentence = ""
    }
    return sentence
}
console.log(changeToTitleCase("hey prabhu, yeh kya hua?"))