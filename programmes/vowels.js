//function to determine whether a given input character is a vowel or consonant
function isVowel(character) {
  let vowelsList = ["a", "e", "i", "o", "u"];
  let isVowel = false;
  for (let i = 0; i < vowelsList.length; i++) {
    if(vowelsList[i] === character.toLocaleLowerCase()){
        isVowel = true
    }
  }
  return isVowel
}

//function to count how many vowels are there in a string

function countOfVowels(string){
    let count = 0
    for(let i = 0; i < string.length; i++){
       isVowel(string[i].toLocaleLowerCase()) ? count += 1 : count
        
    }
    return count
}

//testcase

const testObj = [
    {
        string: 'A road full of grass',
        expectedOutput: 6
    },
    {
        string: 'Hello world',
        expectedOutput: 3
    },
    {
        string: 'Euouae',
        expectedOutput: 6
    },
    {
        string: 'Queueing',
        expectedOutput: 5
    },
    {
        string: 'My Rhythms fly, My Rhythms Cry',
        expectedOutput: 0
    },
]

const testCase = (testObj) => {
 testObj.forEach((item, i) => {
    if(item.expectedOutput === countOfVowels(item.string)){
        console.log(`Testcase passed for ${i}. The output is ${countOfVowels(item.string)}`)
    }else {
        console.log(`Testcase failed for ${i}. The expected output was ${item.expectedOutput}, but got ${countOfVowels(item.string)}`)
    }
 })
}
testCase(testObj)