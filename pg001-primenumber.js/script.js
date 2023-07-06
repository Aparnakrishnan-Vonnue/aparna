function isPrime(number) {
  if (number === 1) {
    return `${number} is neither prime nor composite`;
  }

  if (number < 1 || Math.round(number) !== number || typeof(number) === "string") return false;

  let i = 2;
  while (i < number/2) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}

const testCases = [
  {
    value: 1,
    expected: "1 is neither prime nor composite",
  },
  {
    value: 2,
    expected: true,
  },
  {
    value: -1,
    expected: false,
  },
  {
    value: 0,
    expected: false,
  },
  {
    value: 2.5,
    expected: false,
  },
  {
    value: 2.0,
    expected: true,
  },
  {
    value: "aparna",
    expected: false,
  },
];

const testIsPrime = (tcases, i) => {
  tcases.forEach((tcase, i) => {
    if (isPrime(tcase.value) === tcase.expected) {
      console.log("test case " + i + " passed");
    } else {
      console.log(
        "test case " +
          i +
          " failed." +
          " expected value: " +
          tcase.expected +
          " got: " +
          isPrime(tcase.value)
      );
    }
  });
};

testIsPrime(testCases);
