let arrayToSort = [5, 2, 8, 100, 1, 11, 25]

function sortAnArray(array) {
    let temp_storage = 0;
  
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] > array[j]) {
          temp_storage = array[i];
          array[i] = array[j];
          array[j] = temp_storage;
        }
      }
    }
    return array;
  }
  

const testCases = [
    {
        arrayToSort: [5, 2, 8, 100, 1, 11, 25],
        expectedOutput: [1, 2, 5, 8, 11, 25, 100]
    },
    {
        arrayToSort: [-1, -2, -8, -10, -100],
        expectedOutput: [-100, -10, -8, -2, -1]
    },
    {
        arrayToSort: [0.1, 0.8, 1, 5, 3, -2, 80],
        expectedOutput: [-2, 0.1, 0.8, 1, 3, 5, 80]
    }
]

const testCase = (tCases) => {
    tCases.forEach((tCase, idx) =>{
        for(let i = 0, j = 0; i < tCase.expectedOutput.length && j< sortAnArray(tCase.arrayToSort).length; i++,j++ ){
            if(tCase.expectedOutput[i] === (sortAnArray(tCase.arrayToSort))[j]){
                if(i === (tCase.expectedOutput).length - 1 && j === sortAnArray(tCase.arrayToSort).length - 1 ){
                    console.log(`Testcase for ${idx} passed `)
                }
            }
            else {
                console.log(`Testcase for ${idx} failed. The expected result was ${tCase.expectedOutput}, but got ${sortAnArray(tCase.arrayToSort)}`)
            }
        }
    } )
}

console.log(testCase(testCases))