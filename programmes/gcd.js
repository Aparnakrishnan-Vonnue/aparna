function findGcd(num1, num2) {
  let temp = 0;
  let diff = 0;

  if (num1 < 0 || num2 < 0) {
    (num1 = Math.abs(num1)), (num2 = Math.abs(num2));
  }
  while (num1 > 0) {
    if (num1 < num2) {
      temp = num1;
      num1 = num2;
      num2 = temp;
      diff = num1 - num2;
      num1 = diff;
    } else {
      diff = num1 - num2;
      num1 = diff;
    }
  }
  return num2;
}

const testObj = [
  {
    num1: 5,
    num2: 2,
    expectedOutput: 1,
  },
  {
    num1: 100,
    num2: 300,
    expectedOutput: 100,
  },
  {
    num1: 0,
    num2: 1,
    expectedOutput: 1,
  },
  {
    num1: -10,
    num2: -5,
    expectedOutput: 5,
  },
  {
    num1: -100,
    num2: -300,
    expectedOutput: 100,
  },
];

const testCase = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].expectedOutput === findGcd(obj[i].num1, obj[i].num2)) {
      console.log(`testcase passed for ${i}`);
    } else {
      console.log(
        `testcase for ${i} failed, expected result was ${
          obj[i].expectedOutput
        }, but got ${findGcd(obj[i].num1, obj[i].num2)}`
      );
    }
  }
};

testCase(testObj);
