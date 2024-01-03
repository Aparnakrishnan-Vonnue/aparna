//check whether the given year is a leap year or not

function isLeapYear(year){
    let isLeapYear = false
    if(year % 4 === 0){
        isLeapYear = true
    }
    if(isLeapYear){
        return `${year} is a leap year`
    }
    return `${year} is not a leap year`
}

console.log(isLeapYear(2024))

//testcase
const testObj = [
    {
        year: 2024,
        expected: '2024 is a leap year'
    },
    {
        year: 2002,
        expected: '2002 is not a leap year'
    },
    {
        year: 2000,
        expected: '2000 is a leap year'
    },
    {
        year: 2040,
        expected: '2040 is a leap year'
    }
]

const testCase = (testObj) => {
    testObj.forEach((tCase, i) => {
        if(tCase.expected === isLeapYear(tCase.year)){
            console.log(`Testcase passed for ${i}, The output is ${isLeapYear(tCase.year)}`)
        }
        else{
            console.log(`Testcase failed for ${i}, Expected output is ${tCase.expected}, but got ${isLeapYear(tCase.year)}`)
        }
    })
}

testCase(testObj)