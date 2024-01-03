function changeToTitleCase(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
}

// console.log(changeToTitleCase("hey prabhu, yeh kya hua?"));

const testObj = [
  {
    string: "hey prabhu, yeh kya hua?",
    expectedOutput: "Hey Prabhu, Yeh Kya Hua?",
  },
  {
    string: "dance",
    expectedOutput: "Dance",
  },
  {
    string: "run Across the sea",
    expectedOutput: "Run Across The Sea",
  },
];

const testcase = (testObj) => {
  testObj.forEach((item, i) => {
    if (item.expectedOutput === changeToTitleCase(item.string)) {
      console.log(`Testcase passed for ${i}. The output is ${changeToTitleCase(item.string)}`);
    } else {
      console.log(
        `Test case failed, Expected output was ${
          item.expectedOutput
        }, but got ${changeToTitleCase(item.string)}`
      );
    }
  });
};

testcase(testObj);
