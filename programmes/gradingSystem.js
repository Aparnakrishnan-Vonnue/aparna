//implement a grading system with letters A, B, C, D, E, F according to numeric scores

function generateGrades(score) {
  let grade = "";
  if (score >= 85) {
    grade += "A";
  } else if (score >= 60 && score < 85) {
    grade += "B";
  } else if (score >= 45 && score < 60) {
    grade += "C";
  } else if (score >= 33 && score < 45) {
    grade += "D";
  } else {
    grade += "F";
  }
  return grade;
}

//max mark = 100, >85 - A, 60-85 - B, 45-65 - C,  33-45 - D, below 32 - E and F(failed)

//test case
const testObj = [
    {
        score: 100,
        expectedGrade: 'A'
    },
    {
        score: 0,
        expectedGrade: 'F'
    },
    {
        score: 50,
        expectedGrade: 'C'
    },
    {
        score: 45,
        expectedGrade: 'C'
    },
    {
        score: 32,
        expectedGrade: 'F'
    }
]

const testCase = (testObj) => {
    testObj.forEach((tCase, i) => {
        if(tCase.expectedGrade === generateGrades(tCase.score)){
            console.log(`Testcase for ${i} passed. The generated grade is ${generateGrades(tCase.score)}`)
        }else{
            console.log(`Testcase for ${i} failed, Expected grade was ${tCase.expectedGrade}, but got ${generateGrades(tCase.score)}`)
        }
    })
}

testCase(testObj)