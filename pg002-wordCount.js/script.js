

function count_of_words(sentence){
  let i = 0
  let count = 0
  
  while (i < sentence.length){

    if(sentence[i] === " " && i !== sentence.length - 1 && sentence[i + 1] !== " "){
      count = count + 1
    }

    if(i === sentence.length - 1 ){
      count = count + 1
      return count
    }
    i++ 
  }
}




const testCases = [
  {
    sentence: "Hello",
    expected: 1
  },
  {
    sentence: "Programming is fun.",
    expected: 3
  },
  {
    sentence: "This is a sample sentence.",
    expected: 5
  },
  {
    sentence: "1",
    expected: 1
  },
  {
    sentence: "good ",
    expected: 1
  },
  {
    sentence: "happy  Birthday.",
    expected: 2
  }
]

function test_count_of_words(tcases){
 tcases.forEach((tcase, idx) => {
  if(count_of_words(tcase.sentence) === tcase.expected){
    console.log("Testcase " + idx + " passed")
  }else {{
    console.log("Testcase " + idx + " failed. "+"expected: "+ tcase.expected + " got: " + count_of_words(tcase.sentence))
  }}
 })
}

test_count_of_words(testCases)