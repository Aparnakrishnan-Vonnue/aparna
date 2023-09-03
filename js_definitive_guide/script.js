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

// console.log(Math.pow(2, 53)) // 2 to the power 53
// console.log(Math.round(.6)) //round to nearest integer
// console.log(Math.ceil(.6)) //round up to an integer
// console.log(Math.floor(.6)) //round down to an integer
// console.log(Math.abs(-5)) // absolute value
// console.log(Math.max(1, 2, 3))
// console.log(Math.min(1, 2, 3))
// console.log(Math.random()) //Pseudo randon number x where 0 <= x <= 1
// console.log(Math.PI)
// console.log(Math.E)//base of natural algorithm
// console.log(Math.sqrt(3))
// console.log(Math.cos(0))
// console.log(Math.log(10))

// let x = .3 - .2
// let y = .2 - .1
// console.log(x === y)
// console.log(x, y)

// console.log((0.1 + 0.2) - 0.3)
// console.log(BigInt(1))

// let integer = 1111111111111111111111111111111111111111111111
// let bigInteger = BigInt(1111111111111111111111111111111111111111111111111111111111)
// console.log(integer)
// console.log(bigInteger)

// let timeStamp = Date.now(); //current time as a number
// console.log(timeStamp)

// let now = new Date();
// console.log(now) //current time as a date obj

// let milliSecond = now.getTime() //convert to a millisecond timestamp
// console.log(milliSecond)

// let iso = now.toISOString()
// console.log(iso)


